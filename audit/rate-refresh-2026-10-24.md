# Automatic rate refresh repair — October 24, 2026

The deployed official-rate.json had rate 2 and checkedAt 2026-10-24T04:32:18.202Z. The matching scheduled Pages run 40062720859 succeeded. Recent scheduled runs were hours apart despite the requested half-hour schedule. At 08:02 UTC the latest snapshot was already outside the browser's two-hour acceptance window. A browser retaining October 18's last accepted snapshot could therefore keep rejecting healthy later deployments.

The official source https://cdn2.arkdedicated.com/asa/dynamicconfig.ini independently returned TamingSpeedMultiplier=2.0. The feed was readable and no rate was hardcoded into the fix.

The client now accepts valid deployment snapshots up to 24 hours old, labels those older than two hours as delayed, retains the real source-check timestamp, and rejects timestamps too far in the future. Each JSON request carries a cache-busting query. Network failures and older/invalid snapshots retain the existing unavailable/manual fallback. Manual overrides and active tame data are preserved. The existing scheduled JSON workflow remains unchanged.

Validation: tests/official-rate-refresh.cjs exercises recovery from the October 18 saved value with a delayed current snapshot, fresh snapshots, manual overrides, invalid or expired values, future timestamps, offline failure and active notes. JavaScript syntax checked. No guide, artwork, license or audience changes.
