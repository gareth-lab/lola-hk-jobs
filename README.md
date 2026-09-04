# Lola · HK Opportunities

A small, self-contained static site for **Lola Jones** to review and rank Hong Kong graduate / analyst / associate roles. Rankings and notes stay in the browser (`localStorage`). Share a shortlist with a mentor via email/copy, or export JSON for Gareth / a future job scanner.

## Quick start (preferred)

From this folder:

```bash
cd /workspace/lola-hk-jobs
python3 -m http.server 8080
```

Then open **http://localhost:8080** in a browser.

Password (prototype gate): `st-andrews-2027`  
After unlock, the gate remembers this browser via `localStorage`.

### Alternative

You can also open `index.html` directly (double-click / File → Open). Some browsers are stricter with local files; the simple HTTP server path above is more reliable.

## How to use (Lola)

1. Unlock with the password.
2. Read each card — company, role, sector tags, short blurb, and “why it might fit”.
3. Rank: **Love / Interested / Maybe / Skip**. Tap again to clear that rank.
4. Optional: add a one-line note under a role.
5. Apply in two ways on every card:
   - **Open careers page** — jumps straight to the firm’s real careers / search hub.
   - **How to apply** — opens an in-site guide with search keywords, 3–6 concrete clicks/filters, portal tips, and the same careers link (built for a first-time grad applicant).
6. Watch **Insights** update (Drawn to / Less drawn to + plain-English summary).
7. Filter with **All / Unranked / Love / Interested / Maybe / Skip**.
8. Share your shortlist:
   - **Email shortlist** — opens your mail app with subject `Lola shortlist — HK opportunities` and a plain-text body listing Love + Interested roles (company, title, sector, why-it-fits, apply URL, your note). Maybe roles appear under “Also considering”. If nothing is Love/Interested yet, you’ll get a nudge to rank first.
   - **Copy shortlist** — copies that same body to the clipboard (toast: “Copied”) so you can paste into WhatsApp / Slack / Notes for a mentor.
   - **Export JSON** — downloads `lola-preferences.json` (rankings, notes, apply guidance, preference summary) for the smarter-scanner loop.
9. **Reset rankings** clears ranks + notes after confirm (does not remove the unlock).

## Preference / smarter system (light)

- Rankings **stay on this device** (localStorage).
- **Export JSON** is what feeds future weekly scans and helpers — it includes `applyUrl`, structured apply guidance (`searchTerms`, `steps`, `portalTips`, `deadlineNote`), ranks, notes, and the Insights summary.
- **Email shortlist** is for a mentor & intros — human-readable, not the machine file.

You’ll see a short note saying the same thing under Insights in the UI.

## How to use (Gareth / mentors)

- Share the folder or `lola-hk-jobs.zip`.
- Prefer the `python3 -m http.server` path so links and fonts behave normally.
- Ask Lola to **Email shortlist** or **Copy shortlist** when you want a quick human readout.
- Ask her to **Export JSON** when you want structured preference data for scanning / follow-up.

## What’s included

| File | Purpose |
|------|---------|
| `index.html` | Full app (HTML + CSS + JS) |
| `README.md` | This guide |
| `lola-hk-jobs.zip` | Zip of the site ready to share |

No build step. No backend. CDN only for Google Fonts (Fraunces + Source Sans 3). Teal accent on warm paper.

## Seeded roles (29)

Roles now live in `jobs.json`, not in the HTML. See `town-routines.md` (Town team setup, three routines) for the scanner that grows the list and `apps-script.gs` for the Google Sheet backend. Set `DATA_URL` in `index.html` once the sheet is deployed; until then the site runs from `jobs.json` + localStorage.

Each role now carries `visaTier` (likely / possible / unlikely), `languageReq` and `langBonus`, shown as badges, and every card has a **Flag for an intro** toggle that is separate from Love: Love = "I'd work there", Flag = "an intro would move this". Flags appear in the email/copy shortlist and the JSON export.

Links point at careers hubs. A handful (Swire, Jardines, FGS, the chambers) are top-level sites rather than a careers deep link — verify and update in the sheet.

### Previous seed list (12, for reference)

1. McKinsey & Company — Business Analyst  
2. Boston Consulting Group — Associate  
3. Bain & Company — Associate Consultant  
4. Oliver Wyman — Entry-level Consultant (2027)  
5. Strategy& (PwC) — Associate  
6. Eurasia Group — Research Analyst / Associate (Asia)  
7. Control Risks — Analyst — Political & Security Risk (Asia)  
8. Oxford Analytica — Analyst / Research Associate (Asia)  
9. Goldman Sachs — Research Analyst — Macro / Economics (Asia)  
10. J.P. Morgan — Markets Analyst / Global Research (Asia)  
11. BlackRock — Analyst — Aladdin / Investment Research (Asia)  
12. Deloitte (Monitor Deloitte) — Business Analyst — Strategy & Transactions  

Application links point at real careers hubs / search pages (not brittle deep links to expired postings). Each role has navigation steps and search terms (e.g. “Hong Kong”, “Business Analyst”, “2027”, “graduate”). Deadlines are indicative — always confirm on the live posting. Political-risk titles are plausible HK / Asia-hub roles; openings move often.

### Apply guidance strength (honest)

- **Stronger:** MBB + Oliver Wyman + bank/AM student portals (clear filters + campus language).  
- **Weaker / thinner markets:** Eurasia Group, Control Risks, Oxford Analytica — few live Analyst posts at any moment; guidance leans on careers hubs + rolling checks + writing-sample tips rather than a guaranteed open req.

## Candidate context (baked into copy)

- MA (Hons) International Relations, University of St Andrews (Sep 2023–Jun 2027)  
- Interests: international development, foreign policy, political risk  
- Preference stack: consulting/strategy → political risk → finance macro → wide net  
- Internships: World Connect, Fintech Collective (VC), United Way NL  
- Languages: English + Dutch native, French working  

## Privacy note

The password gate is **client-side only** — fine for a private prototype, not real security. Anyone with the password (or who inspects the page source) can unlock. Rankings never leave the device unless Lola emails, copies, or exports.
