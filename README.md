# ASA Creature Companion — Unofficial Beta

A free, noncommercial fan-made ARK: Survival Ascended companion for public testing. Not affiliated with Studio Wildcard. This is an unfinished beta, not a finished release.

## Run or publish

1. The existing public app is https://kjgal.github.io/asa-creature-companion-beta/; its source is this repository.
2. In Settings → Pages, set Source to GitHub Actions.
3. Run the Publish public beta workflow. It also runs on main-branch pushes and requests rate refreshes twice per hour. GitHub schedules can be delayed.
4. Share the deployment URL shown by the workflow. Users can open it on mobile without downloading the repository.

For local use, first unzip `site/assets/creature-art.zip` into `site/assets/`, then serve `site/` with a static HTTP server. Open it in a browser; local files alone may not support all features.

## Beta limits

This snapshot has 153 written guides (including acquisition and wild encounters) out of 202 catalogue entries. Full-page source comparison, some gameplay details and numerical requirements remain pending. Some methods are documented or player-reported suggestions. Check results in game. No account, shared save or cloud sync is provided; session progress is stored in each browser.

Official rates are read from ARK’s public dynamic configuration during each deployment. The UI shows the actual check timestamp and accepts snapshots up to two hours old, then shows the existing unavailable/manual-rate fallback. An outage does not fabricate a new rate. The first unbuilt copy uses manual rates. The daily guide and habitat update task now writes directly to this repository at 6 a.m. America/Los_Angeles. This beta is the active app; the former private Site is retained as an archived copy.

`robots.txt` and a noindex tag request that compliant search engines omit the beta; this does not make a public repository or site private.

## Credits and rights

Creature guides are adapted from the ARK Community Wiki and contributors under CC BY-NC-SA 4.0: https://ark.wiki.gg/ and https://creativecommons.org/licenses/by-nc-sa/4.0/. Additional tips come from community video guides. Specific provenance remains inside the guide data; individual reference sections are not displayed.

Calculation data: ARK Smart Breeding by cadon and contributors, under the included MIT notice (`site/licenses/ARK-Smart-Breeding-MIT.txt`). Formula references: ARK Modding Wiki. Silkscreen font by the Silkscreen Project Authors, under the included OFL notice. ARK names and content belong to their respective owners. Pixel creature and companion images were generated for this project; they are not copied game icons. This repository does not grant ownership of third-party content or blanket rights clearance.

Guide and habitat data migrated through private source revision 5aced342614731d065fe63d37441f6ddb8e3239c (October 18, 2026). Future updates use this repository directly.

October 19 review: five wild-encounter guides, 58 catalogue entries still without written guides, 103 general habitat/availability notes and 22 Aberration notes. Provenance and limitations: audit/guide-review-2026-10-19.json.

October 20 review: three standard Wyvern acquisition guides, 55 catalogue entries still without written guides, 106 general habitat/availability notes and 22 Aberration notes. Unicorn research remains pending. Provenance and limitations: audit/guide-review-2026-10-20.json.

October 21 review: regular and Diseased Leech Fish Basket guides plus four untameable insect encounter guides, 49 catalogue entries still without written guides, 111 general habitat/availability notes and 22 Aberration notes. Provenance and limitations: audit/guide-review-2026-10-21.json.
