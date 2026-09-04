/**
 * Lola · HK Opportunities — Google Sheet backend
 *
 * Setup (once, ~10 min):
 *  1. Create a Google Sheet called "HK Jobs". Add three tabs: roles, rankings, scan_log.
 *  2. Row 1 of `roles` = exactly these headers (Town writes to these names):
 *     id | company | title | location | sectors | keywords | description | fit | applyUrl |
 *     deadline | deadlineDate | visaTier | languageReq | langBonus | searchTerms | steps |
 *     portalTips | deadlineNote | source | addedBy | addedAt | status
 *     (sectors/keywords/langBonus/searchTerms/steps are pipe-separated: "a|b|c")
 *  3. Row 1 of `rankings` = id | rank | note | flag | updatedAt
 *  4. Row 1 of `scan_log` = runAt | source | found | new | notes
 *  5. Import jobs.json into `roles` (Extensions → Apps Script → run importSeed after pasting the JSON
 *     into a cell, or just paste rows by hand; 21 rows).
 *  6. Extensions → Apps Script → paste this file → Deploy → New deployment → Web app →
 *     Execute as: Me · Who has access: Anyone → copy the URL into DATA_URL in index.html.
 *  7. Share the Sheet with Town's Google account (edit access).
 */

const SHEET = () => SpreadsheetApp.getActiveSpreadsheet();
const PIPE = ["sectors", "keywords", "langBonus", "searchTerms", "steps"];

function readTab(name) {
  const rows = SHEET().getSheetByName(name).getDataRange().getValues();
  const head = rows.shift();
  return rows.filter(r => r[0]).map(r => Object.fromEntries(head.map((h, i) => [h, r[i]])));
}

function doGet(e) {
  const roles = readTab("roles")
    .filter(r => (r.status || "active") === "active")
    .map(r => { PIPE.forEach(k => r[k] = String(r[k] || "").split("|").map(s => s.trim()).filter(Boolean)); return r; });
  const rankings = {};
  readTab("rankings").forEach(r => rankings[r.id] = { rank: r.rank || null, note: r.note || "", flag: String(r.flag) === "true" });
  return ContentService.createTextOutput(JSON.stringify({ jobs: roles, rankings }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const body = JSON.parse(e.postData.contents || "{}");
  if (body.action !== "rank" || !body.id) return ContentService.createTextOutput("ignored");
  const sh = SHEET().getSheetByName("rankings");
  const ids = sh.getRange(2, 1, Math.max(sh.getLastRow() - 1, 1), 1).getValues().map(r => r[0]);
  const row = [body.id, body.rank || "", body.note || "", !!body.flag, body.updatedAt || new Date().toISOString()];
  const i = ids.indexOf(body.id);
  if (i >= 0) sh.getRange(i + 2, 1, 1, row.length).setValues([row]);
  else sh.appendRow(row);
  return ContentService.createTextOutput("ok");
}

/** One-off: paste the contents of jobs.json into cell A1 of a tab called `seed`, then run this. */
function importSeed() {
  const raw = SHEET().getSheetByName("seed").getRange("A1").getValue();
  const jobs = JSON.parse(raw).jobs;
  const sh = SHEET().getSheetByName("roles");
  const head = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  const rows = jobs.map(j => head.map(h => {
    if (PIPE.includes(h)) return (j[h] || []).join("|");
    if (h === "addedBy") return "seed";
    if (h === "addedAt") return "2026-09-04";
    if (h === "status") return "active";
    return j[h] == null ? "" : j[h];
  }));
  sh.getRange(sh.getLastRow() + 1, 1, rows.length, head.length).setValues(rows);
}
