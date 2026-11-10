import { shuffleChoices } from '@/components/accounting/shuffle';
export const dr = (account, amount) => ({ account, debit: amount, credit: 0 });
export const cr = (account, amount) => ({ account, debit: 0, credit: amount });
// Author the correct answer first; its position is then fixed deterministically from the question.
export const q = (question, options, why) => ({ question, ...shuffleChoices(options, 0, question), why });
export const card = (h, text, extra = {}) => ({ h, text, ...extra });
export const lesson = (id, title, minutes, cards, checks, practice) => ({ id, title, minutes, cards, checks, practice });