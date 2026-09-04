# Town routines for Lola's HK job search

## Setup without a paid team plan (recommended)

The Google Sheet is the shared layer; Town's team plan is not needed.

1. Share the "HK Jobs" sheet with Lola's Google account (edit) and with Pebble's Google
   Sheets integration on Gareth's personal Town.
2. Run Routine 1 (scanner) on Gareth's personal Town. It writes to the sheet, sends nothing.
3. Routine 2 (digest) is optional. The ranking site now shows "Closing in 14 days" and
   "New this week" at the top, computed from the sheet, so the site *is* the digest. If
   Lola's personal Town plan allows custom routines, send her Routine 2 as a share link
   (Routine → Share) or she pastes the text below into her own Town; it then runs on her
   account and messages only her.
4. Routine 3 (headhunter list) runs on Gareth's personal Town and maintains a Google Doc
   in his Drive instead of a team document.
5. For a nudge without any email from Gareth: Lola turns on Google Sheets notification
   rules on the sheet (Tools → Notification settings → weekly digest of changes).

## Alternative setup: a paid two-person Town team (not needed)

1. In Town, create a team (avatar → Teams → Create a team) called "Lola HK" and invite
   Lola. She needs her own Town account.
2. Connect Google Sheets as a **team integration** and share the "HK Jobs" sheet with it.
3. Upload Lola's CV to the team so both Townies can read it.
4. Build Routine 1 and Routine 3 as **group routines** (they run on the team, not on
   anyone's account; either of you can edit them).
5. Build Routine 2 on your account, then Create Installable Routine → let members add.
   Lola installs it; it runs on her Town and delivers to her. Nothing is sent from
   Gareth's account, ever.

Three routines, deliberately separate: the scanner can be re-run without spamming
anyone; the digest is the only thing that messages Lola, and it runs on her account.

---

## Routine 1 — HK job scanner (group routine)

**Runs on:** the team
**Trigger:** every Thursday, 07:00 HK time
**Tools:** web browsing/search, Google Sheets (read + write), team files (read)
**Mode:** read-only (it writes only to the Sheet, which is the point)

Paste this as the instructions:

> You are scanning for graduate-entry jobs in Hong Kong for Lola Jones, a final-year MA
> International Relations student at St Andrews graduating June 2027. Her CV is attached
> (or: in Drive at [path]). She speaks English and Dutch natively and working French.
> She has no Cantonese or Mandarin. She holds British, US and Dutch passports, which gives
> her three ways in: employer sponsorship (General Employment Policy), the French V.I.E.
> scheme (EU nationals under 28, employer carries the visa), and the Hong Kong Working
> Holiday Scheme (UK and Dutch nationals, 12 months, no sponsor — a bridge to conversion).
>
> **Step 1 — read context.** Open the Google Sheet "HK Jobs". Read the `roles` tab (this
> is the seed list and everything already found) and the `rankings` tab (Lola's
> Love / Interested / Maybe / Skip and her "flag for intro" marks). Use rankings to
> calibrate: sectors she has marked Love or Interested get a scoring bonus; sectors she
> has marked Skip twice or more are excluded unless a posting is an unusually strong fit.
>
> **Geography.** Hong Kong is first choice. Singapore is second: include Singapore roles
> only when they are a strong fit or the employer has no HK intake, and cap at 3 per run.
> Other Southeast Asian cities (Bangkok, Kuala Lumpur, Jakarta, Manila, Ho Chi Minh City)
> are third: include only MNC graduate schemes and development/policy institutions
> (UNDP, Asia Foundation, ADB, ISEAS-type think tanks), cap at 2 per run. Write the city
> in the `location` column exactly.
>
> **Step 2 — scan.** Search these sources for roles located in Hong Kong (then Singapore, then
> the cities above) with a start
> date between June 2027 and December 2027, graduate/analyst/associate/trainee level,
> posted or updated in the last 14 days:
> - LinkedIn Jobs, JobsDB, eFinancialCareers Hong Kong, CTgoodjobs
> - the careers pages of every company already in the `roles` tab
> - the job boards of the French Chamber (fccihk.com), Dutch Chamber (dutchchamber.hk),
>   AmCham HK and the British Chamber
> - the Business France V.I.E. portal filtered to Hong Kong, then Singapore
> - for Singapore: MyCareersFuture, eFinancialCareers Singapore, the Singapore Dutch and
>   French chambers; for the rest of SE Asia: UNDP jobs, Asia Foundation, ADB careers
> Search terms to rotate: "graduate programme 2027", "management trainee", "analyst",
> "research associate", "political risk", "public affairs", "strategy", "policy",
> "management trainee" (consumer goods and luxury: Unilever, L'Oréal, LVMH, Richemont,
> Pernod Ricard, Diageo, Nestlé, P&G).
>
> **Step 3 — filter hard.** Discard anything that (a) requires Cantonese or Mandarin,
> (b) is senior (2+ years' experience required), (c) is already in `roles` (match on
> company + title + city, not URL), or (d) is outside the geographies above.
> Singapore visa note for scoring: fresh-grad Employment Pass has a salary floor; MNC
> grad schemes clear it, small firms often don't. Her UK/US passports also qualify for
> Singapore's Work Holiday Programme (18–25, six months) as a bridge.
>
> **Step 4 — score each survivor 1–5** on: fit to her CV and stated interests
> (international development, foreign policy, political risk, fintech/VC exposure);
> likelihood of visa sponsorship (bank and MNC graduate schemes = likely; European
> employers = likely; small local firms and nonprofits = unlikely — but do NOT discard
> 'unlikely' employers: she can start on a Working Holiday visa, so score them on fit and
> note 'WHS start' in the fit line); whether French or
> Dutch is an asset for the role; deadline proximity. Do not invent deadlines — write
> "confirm on posting" if none is stated.
>
> **Step 5 — write.** Append each new role as a row in `roles` using the sheet's exact
> column names. Pipe-separate list fields ("Consulting|Strategy"). Fill `visaTier`
> (likely / possible / unlikely), `languageReq` ("none" or the requirement),
> `langBonus` (French|Dutch or blank), `source` (the URL you found it on),
> `addedBy` = "town", `addedAt` = today, `status` = "active". Write `fit` as one honest
> sentence addressed to Lola — say "long shot" when it is one. Write 3–5 concrete
> `steps` for applying and 4–6 `searchTerms`.
> Then append one row to `scan_log`: run time, sources checked, roles found, roles added.
>
> Add at most 10 new roles per run. If you found none, log that and stop. Never email
> anyone from this routine.

---

## Routine 2 — Sunday digest (installable routine, runs on Lola's account)

**Runs on:** Lola's Town, after she installs it
**Trigger:** every Sunday, 18:00 HK time
**Tools:** Google Sheets (read), send message to you (email, WhatsApp or Telegram —
Lola picks at install)
**Mode:** autonomous (it only messages its own owner)

> Open the Google Sheet "HK Jobs". Send me one message titled "HK opportunities — week of
> [date]" on my preferred channel.
>
> Section 1, "Closing soon": every active role in `roles` whose `deadlineDate` is within
> the next 14 days, regardless of ranking, sorted by date. If none, say so in one line.
>
> Section 2, "New this week": roles where `addedAt` is within the last 7 days and
> `addedBy` = "town", Hong Kong first, then Singapore, then other cities, ordered by
> score within each, maximum 8. For each: company, title, one-line
> `fit`, visa tier, language note, deadline, apply link, and the link to the ranking
> site [site URL] so she can rank it.
>
> Section 3, "Still unranked": count of active roles with no entry in `rankings`, with
> one line asking her to rank them.
>
> Keep the whole message under 400 words. Plain text, no headings other than the three
> section names. Do not repeat roles I have marked Skip. If there is nothing in
> sections 1 or 2, do not send anything.

---

## Routine 3 — headhunter shortlist document (group routine)

**Runs on:** the team
**Trigger:** manual, then first Monday of the month
**Tools:** Google Sheets (read), Town Documents (create/edit), Google Docs (export)
**Mode:** autonomous (it only edits a document)

> Open the Google Sheet "HK Jobs". Select every role where `rankings.flag` is true or
> `rankings.rank` is "love". Group by sector. For each: company, role type, why Lola is a
> fit (one line), and visa tier. Produce a plain-text list addressed to [headhunter's
> name], under 300 words, no links, no deadlines — he wants companies and role types, not
> postings. Write it into the Google Doc "Headhunter shortlist" in Gareth's Drive (team document if on a team plan), replacing the
> previous version, with a dated changelog line at the bottom saying what was added or
> removed. Do not email anyone. Gareth copies it out when he chooses to forward it.

---

## Things to watch in the first month

- Run the scanner manually once ("run the HK job scanner now") and read the `roles` rows
  it wrote before trusting it. The most common failures will be inventing deadlines and
  missing the language requirement — both are in the instructions but check.
- If the scanner comes back thin, Town's web access may be the limit. Fallback: set
  LinkedIn / JobsDB / eFinancialCareers email alerts to a shared Gmail label and change
  Step 2 to "read every email under label HK-jobs since the last run".
- Once Lola has 15+ rankings, tell the scanner routine: "weight the `rankings` tab more
  heavily" — Town treats that as feedback and tightens the instructions itself.
