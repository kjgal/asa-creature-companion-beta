# Independent official-rate service

Prepared October 26, 2026. Not yet deployed or connected to the app.

This small Cloudflare Worker fetches the fixed official ASA configuration URL when the app requests a rate. Successful results can be reused for up to one minute within a Worker instance. After that it checks the source again. It does not rely on GitHub schedules, and does not claim to poll while nobody uses the app. Failed or invalid source responses return 503 without inventing a rate or a fresh timestamp. No credentials or storage bindings are required at runtime.

## Activate in Cloudflare

1. In Workers & Pages, create a Worker by importing the existing GitHub repository `kjgal/asa-creature-companion-beta`.
2. Name the Worker `asa-official-rates`, select branch `main`, and set the root directory to `rate-service`.
3. Leave the build command empty; deploy command: `npx wrangler deploy`.
4. Deploy, then open the assigned workers.dev URL followed by `/official-rate.json`. Confirm a numeric rate, current checkedAt, and the official source URL.
5. Supply that exact public endpoint for app integration. The app should try this service first and retain scheduled JSON/manual fallback. Do not infer a hostname or point the app at an unverified endpoint.

Cloudflare documentation: https://developers.cloudflare.com/workers/ci-cd/builds/configuration/

Validate before deployment: `node --test rate-service/worker.test.mjs` from the repository root. The GitHub Pages workflow and app remain unchanged until a live endpoint is verified. No whole-site migration is needed.
