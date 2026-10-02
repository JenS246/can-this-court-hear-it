const assert = require("node:assert/strict");
const cards = require("../cards.js");

assert.equal(cards.length, 44, "deck should contain 44 cards");
assert.equal(cards.filter((card) => card.category === "SUBJECT-MATTER JURISDICTION").length, 20);
assert.equal(cards.filter((card) => card.category === "PERSONAL JURISDICTION").length, 20);
assert.equal(cards.filter((card) => card.type === "challenge").length, 4);
assert.equal(new Set(cards.map((card) => card.id)).size, cards.length, "card ids must be unique");

for (const card of cards) {
  assert.ok(card.scenario && card.question && card.explanation, `${card.id} is incomplete`);
  assert.ok(card.explanation.split(/(?<=[.!?])\s+/).length <= 3, `${card.id} explanation is too long`);
  if (card.type === "binary") assert.ok(["yes", "no"].includes(card.answer));
  if (card.type === "challenge") {
    assert.equal(card.choices.length, 4);
    assert.ok(card.choices.includes(card.answer));
  }
}

const allCopy = cards.map((card) => JSON.stringify(card)).join("\n");
assert.equal(/[—–]/.test(allCopy), false, "deck contains a prohibited dash character");
assert.match(allCopy, /exceeds \$75,000/);

console.log("Deck checks passed: 44 complete, unique, legally scoped cards.");
