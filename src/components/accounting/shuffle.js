// Deterministic option shuffling.
// Authored content lists the correct answer first, which is easy to write and easy to game:
// a learner who notices that option A is always right stops reasoning. These helpers reorder
// the choices with a seed derived from the content itself, so the order is stable for a given
// item across sessions and devices (saved progress stores indexes) but is not "always A".
const hash = text => { let h = 2166136261; for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };

export function shuffleChoices(options, correct, seed) {
  const order = options.map((_, i) => i);
  let state = hash(seed) || 1;
  for (let i = order.length - 1; i > 0; i--) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    const j = state % (i + 1);
    [order[i], order[j]] = [order[j], order[i]];
  }
  return { options: order.map(i => options[i]), correct: order.indexOf(correct) };
}
