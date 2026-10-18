// Original implementation of the independently documented affinity/food-drain equations.
// No upstream calculator code is imported. Formula sources and checks: audit/rex-calculator-2026-10-01.json.
const TamingCalculator = (() => {
  const validInputs = (level, rate) => Number.isInteger(level) && level >= 1 && level <= 1000 && Number.isFinite(rate) && rate >= 0.1;
  function estimate(creature, level, rate, food, elixir = false) {
    const species = tamingCalculationData.creatures[creature];
    if (!species || species.method !== 'knockout' || !validInputs(level, rate) || !Object.hasOwn(species.foods, food) || typeof elixir !== 'boolean') return null;
    const item = species.foods[food];
    if (item.quantityReviewed === false) return null;
    const requiredAffinity = (species.affinityBase + level * species.affinityPerLevel) * (elixir ? 0.7 : 1);
    // The built-in 4x affinity normalization is separate from the user's selected server rate.
    const affinityPerFeed = item.affinity * 4 * rate;
    const quantity = Math.ceil(requiredAffinity / affinityPerFeed);
    if (!Number.isSafeInteger(quantity) || quantity < 1) return null;
    const drainPerSecond = species.foodDrainBase * species.foodDrainMultiplier;
    const durationSeconds = item.timeReviewed ? Math.ceil(quantity * item.foodValue / drainPerSecond) : null;
    if (durationSeconds !== null && (!Number.isSafeInteger(durationSeconds) || durationSeconds < 1)) return null;
    return {creature, level, rate, food, elixir, quantity, durationSeconds, reviewed: tamingCalculationData.reviewed,
      dataRevision: tamingCalculationData.upstreamCommit, status: species.status};
  }
  function remaining(estimate, started, now) {
    if (!estimate || !Number.isSafeInteger(estimate.durationSeconds) || estimate.durationSeconds <= 0 || !Number.isFinite(started) || !Number.isFinite(now)) return null;
    return Math.max(0, estimate.durationSeconds - Math.max(0, Math.floor((now - started) / 1000)));
  }
  return Object.freeze({validInputs, estimate, remaining});
})();
