# ASA Creature Companion — Unofficial Beta

A free, noncommercial fan-made ARK: Survival Ascended companion for public testing. Not affiliated with Studio Wildcard. This is an unfinished beta, not a finished release.

## Run or publish

1. The existing public app is https://kjgal.github.io/asa-creature-companion-beta/; its source is this repository.
2. In Settings → Pages, set Source to GitHub Actions.
3. Run the Publish public beta workflow. It also runs on main-branch pushes and requests rate refreshes twice per hour. GitHub schedules can be delayed.
4. Share the deployment URL shown by the workflow. Users can open it on mobile without downloading the repository.

For local use, first unzip `site/assets/creature-art.zip` into `site/assets/`, then serve `site/` with a static HTTP server. Open it in a browser; local files alone may not support all features.

## Beta limits

This snapshot has 203 written guides (including acquisition and wild encounters) out of 203 catalogue entries. Full-page source comparison, some gameplay details and numerical requirements remain pending. Some methods are documented or player-reported suggestions. Check results in game. No account, shared save or cloud sync is provided; session progress is stored in each browser.

Official rates are read from ARK’s public dynamic configuration during each deployment. The UI shows the actual check timestamp. Snapshots older than two hours are clearly marked as delayed; snapshots older than 24 hours are rejected and use the unavailable/manual-rate fallback. This tolerates delayed GitHub schedules without claiming a fresh check or changing the source timestamp. Requests bypass cached JSON, and a failed refresh preserves browser progress and manual overrides. The first unbuilt copy uses manual rates. The daily guide and habitat update task now writes directly to this repository at 6 a.m. America/Los_Angeles. This beta is the active app; the former private Site is retained as an archived copy.

`robots.txt` and a noindex tag request that compliant search engines omit the beta; this does not make a public repository or site private.

## Credits and rights

Creature guides are adapted from the ARK Community Wiki and contributors under CC BY-NC-SA 4.0: https://ark.wiki.gg/ and https://creativecommons.org/licenses/by-nc-sa/4.0/. Additional tips come from community video guides. Specific provenance remains inside the guide data; individual reference sections are not displayed.

Calculation data: ARK Smart Breeding by cadon and contributors, under the included MIT notice (`site/licenses/ARK-Smart-Breeding-MIT.txt`). Formula references: ARK Modding Wiki. Silkscreen font by the Silkscreen Project Authors, under the included OFL notice. ARK names and content belong to their respective owners. Pixel creature and companion images were generated for this project; they are not copied game icons. This repository does not grant ownership of third-party content or blanket rights clearance.

Guide and habitat data migrated through private source revision 5aced342614731d065fe63d37441f6ddb8e3239c (October 18, 2026). Future updates use this repository directly.

October 19 review: five wild-encounter guides, 58 catalogue entries still without written guides, 103 general habitat/availability notes and 22 Aberration notes. Provenance and limitations: audit/guide-review-2026-10-19.json.

October 20 review: three standard Wyvern acquisition guides, 55 catalogue entries still without written guides, 106 general habitat/availability notes and 22 Aberration notes. Unicorn research remains pending. Provenance and limitations: audit/guide-review-2026-10-20.json.

October 21 review: regular and Diseased Leech Fish Basket guides plus four untameable insect encounter guides, 49 catalogue entries still without written guides, 111 general habitat/availability notes and 22 Aberration notes. Provenance and limitations: audit/guide-review-2026-10-21.json.

October 22 review: one Lamprey Fish Basket guide, five untameable cave/mechanical encounter guides and a currently unavailable Scrap Golem reward guide, leaving 42 catalogue entries without written guides. Habitat coverage is 118 general notes and 23 Aberration notes. Provenance and limitations: audit/guide-review-2026-10-22.json.

October 23 review: temporary special-tame guides for the Desert, Forest and Ice Titans; a hard-projectile knockout guide for Titanosaur; and distinct Reaper King offspring-acquisition and untameable Reaper Queen guides, leaving 36 catalogue entries without written guides. Habitat coverage is 122 general notes and 25 Aberration notes. Provenance and limitations: audit/guide-review-2026-10-23.json.

October 24 review: Unicorn passive riding-feed, Phoenix special fire-taming and Troodon special sacrifice guides, with three general habitat notes. Coverage is 169 written guides of 202 entries, leaving 33; habitats have 125 general and 25 Aberration notes. Phoenix's Astraeos conditions remain pending. The upcoming Giga TLC/Enigmasaur target is now November 5 per Community Crunch 529. See audit/guide-review-2026-10-24.json for provenance and limitations.

October 25 review: Astrocetus hard-projectile knockout, Megachelon fish-school escort and Shastasaurus interaction/removal/feeding guides. Coverage is 172 written guides of 202 entries, leaving 30. Habitats have 128 general and 25 Aberration notes. Sources and comparison limits: audit/guide-review-2026-10-25.json.

October 26 review: Ceratosaurus cocktail-assisted feeding, Pyromane douse/ride/flame absorption and Cosmo light-cue feeding guides. Coverage is 175 written guides of 202 entries, leaving 27. Habitats have 131 general and 26 Aberration notes. Cosmo's precise regional distribution remains pending. Sources and limitations: audit/guide-review-2026-10-26.json.


October 27 review: Oasisaur resurrection-defense special tame and Rhyniognatha offspring acquisition, with two general habitat notes. Coverage is 177 written guides of 202 entries, leaving 25. Habitats have 133 general and 26 Aberration notes. Conflicting numerical thresholds and unconfirmed special actions remain pending; see audit/guide-review-2026-10-27.json.

October 28 review: Bison knockout and Deinotherium cue-based passive beer-feeding guides. Coverage is 179 written guides of 202 entries, leaving 23. Added a Deinotherium beach/jungle note: 134 general and 26 Aberration habitat notes. Bison's typical biome distribution remains pending. Fear Ascended's announced October 28 start does not by itself verify event-variant acquisition mechanics; see audit/guide-review-2026-10-28.json.

October 29 review: Malwyn and Solwyn evolution-acquisition guides replace their partial requirements. Coverage is 181 written guides of 202 entries, leaving 21. General habitat/availability notes total 136, including two new evolution/wild-form availability notes; these do not establish precise terrain. Aberration notes remain 26. Numerical evolution requirements and detailed wild habitats remain pending. See audit/guide-review-2026-10-29.json.

October 30 review: Acrocanthosaurus roar-window sedative knockout and Cryolophosaurus shield-reflection knockout guides, plus two general habitat notes. Coverage is 183 written guides of 202 entries, leaving 19. General habitat/availability notes total 138; Aberration notes remain 26. Numerical requirements and firsthand controller details remain pending. See audit/guide-review-2026-10-30.json.

October 31 review: Dreadnoughtus vein-defense special, Megaraptor altar/Torch knockout and temperament-dependent Cat passive guides, with three general habitat notes. Coverage is 186 written guides of 202 entries, leaving 16. Habitat/availability notes total 141 general and 26 Aberration. Community Crunch 530 reconfirms the upcoming November 5 Giga TLC; current live method retained. See audit/guide-review-2026-10-31.json.

November 1 review: Boaratos and Grand Tortugar knockout guides with two Astraeos habitat notes. Coverage is 188 written guides of 202 entries, leaving 14. General habitat/availability notes total 143; Aberration notes remain 26. Numerical torpor/dosing, shot and food requirements remain pending. See audit/guide-review-2026-11-01.json.

November 2 review: Parrot passive trust challenge and Palaeoctopus sedative-feeding knockout guides. Coverage is 190 written guides of 202 entries, leaving 12. Habitat/availability notes total 145 general and 26 Aberration: one seabed habitat and one explicitly pending-terrain availability note added. Food rankings and practical special-action details remain pending; see audit/guide-review-2026-11-02.json.

November 3 review: Dreadmare altar-combat special and Tidepup passive healing guides. Coverage is 192 written guides of 202 entries, leaving 10. General habitat/availability notes total 147, including a nocturnal-sky note and an explicitly pending-terrain Tidepup availability note; Aberration notes remain 26. Tidepup feeding controls, precise habitats and numerical requirements remain pending. See audit/guide-review-2026-11-03.json.

November 4 review: Burrowbuck cautious passive feeding and Drakeling torch/activity/feeding guides. Coverage is 194 written guides of 202 entries, leaving 8. General habitat/availability notes total 149, including Drakeling seasonal habitat types and a Burrowbuck map-availability note; Aberration notes remain 26. Burrowbuck biome/stealth details, controller actions and numerical requirements remain pending. See audit/guide-review-2026-11-04.json.

November 5 review: Maeguana knockout and Ossidon torpor-assisted riding-challenge guides. Coverage is 196 written guides of 202 entries, leaving 6. General habitat/availability notes total 151, including Lost Colony frozen wastelands/tundra and a pending-terrain Maeguana availability note; Aberration notes remain 26. Ossidon's old temporary-map spawns are excluded. The announced Giga/Enigmasaur release is not yet confirmed live at this review; no replacement live method or catalogue entry inferred. See audit/guide-review-2026-11-05.json.

November 6 review: Gloon passive feeding after eye/guard preparation and Gigadesmodus boss-reward egg-sac acquisition guides. Coverage is 198 written guides of 202 entries, leaving 4. General habitat/availability notes total 153; Aberration notes remain 26. Gloon's crash sites refer to Lost Colony. Later patch removal of mandatory crouching takes precedence over older instructions. Giga's elapsed announcement target now carries an explicit verification-pending warning; legacy knockout mechanics were not revalidated. See audit/guide-review-2026-11-06.json.

November 7 review: official v97 release dated November 6 confirms Giga TLC and Enigmasaur. Replaced Giga's legacy knockout guide with Apex Challenge; withdrew legacy numerical estimates and migrated saved Giga sessions without clearing notes, progress or timestamps. Added Aureliax gift/egg-defense acquisition guide and mountain habitat. Added Enigmasaur catalogue entry with an artwork placeholder and verified map-availability note; its practical guide remains pending because the indexed wiki stub is stale. Coverage: 199 written guides of 203 entries, leaving 4; general habitat/availability notes 155, Aberration notes 26. Yesterday's source revision 53d64b4 deployment subsequently succeeded. See audit/guide-review-2026-11-07.json.


November 8 review: added Elderclaw seed/cub acquisition, Umbra aerial challenge-feeding and Enigmasaur matching-tame scan guides. Coverage: 202 written guides of 203 entries; Lumina remains pending because feeding and challenge instructions are incomplete. General habitat/availability notes: 159; Aberration notes: 29. Added green/Fertile native Elderclaw and Bulbdog notes, and blue/Bioluminescent Aberrant Achatina. These counts do not imply complete guide validation, precise terrain coverage or numerical formulas. Individual source provenance and comparison limitations: audit/guide-review-2026-11-08.json.


November 9 review: refreshed Archaeopteryx and Castoroides knockout guides, preparation and provenance. No new guide or creature added; coverage remains 202 written guides of 203 entries, with Lumina's feeding/challenge sequence pending. Added four general habitat notes (163 total, 40 catalogue entries without one) and two blue/Bioluminescent Aberrant water-habitat notes (31 Aberration notes total). Existing detailed encounters preserved. General habitat counts include availability notes and do not establish complete maps or guide validation. See audit/guide-review-2026-11-09.json and tests/guide-review-2026-11-09.cjs.


November 10 review: refreshed Otter and Dung Beetle passive guides, distinguishing taming hand-ins from their ongoing diets. Added Otter, Dung Beetle and Equus general habitats (166 total; 37 catalogue entries without general notes) plus three Aberrant regional notes (34 total). Blue/Bioluminescent and red/Element Dung Beetle habitats are separate from green/Fertile Otter and Equus examples. Guide coverage remains 202 of 203; Lumina is still pending. No catalogue addition. Detailed encounters, anonymous suggestions and rate behavior preserved. Provenance and checks: audit/guide-review-2026-11-10.json and tests/guide-review-2026-11-10.cjs.


November 11 review: refreshed Basilosaurus and Ichthyosaurus passive feeding guides with approach hazards, preparation and source limitations. Added three marine habitat notes, including Archelon shallow/deep-sea examples. Coverage remains 202 written guides of 203 entries; Lumina's feeding stage remains pending. General habitat/availability notes: 169 (34 catalogue entries without one); Aberration notes unchanged at 34. No creature additions inferred from Dragontopia reveals. Detailed encounters, anonymous suggestions and rate behavior preserved. See audit/guide-review-2026-11-11.json and tests/guide-review-2026-11-11.cjs.


November 12 review: refreshed Jerboa and Lymantria knockout guides with controlled-damage preparation, food and action notes. Added three general habitat notes (172 total; 31 catalogue entries without general notes) and a green/Fertile Aberrant Iguanodon note (35 Aberration notes total). Coverage remains 202 written guides of 203 entries; Lumina's feeding stage is still pending. No new creatures inferred from reveal material. Existing detailed encounters, anonymous suggestions and rate behavior preserved. Sources/comparison limits and checks: audit/guide-review-2026-11-12.json and tests/guide-review-2026-11-12.cjs.


November 12 Lumina follow-up: added its special riding-challenge guide using indexed species/official release references and anonymous supplied reference notes. Feeding-prompt/repeat-cycle and ejection-retry details are explicitly Suggested methods pending independent confirmation; no firsthand origin assumed. Numerical thresholds/bonuses, target controls, glide criteria and saddle/skill/Horn details remain pending. Coverage is 203 written guides of 203 catalogue entries, not complete validation. General habitat/availability notes: 173 (30 catalogue gaps); Aberration notes remain 35. No creature or artwork added. See audit/lumina-followup-2026-11-12.json and tests/lumina-followup-2026-11-12.cjs.
