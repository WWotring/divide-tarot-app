import { drawRandomCards } from './drawCards';

const deck = Array.from({ length: 78 }, (_, i) => ({ uri: `card-${i}.jpeg`, name: `Card ${i}` }));

test('returns the requested number of cards', () => {
  const result = drawRandomCards(deck, 3);
  expect(result).toHaveLength(3);
});

test('never repeats a card within a single draw', () => {
  for (let i = 0; i < 500; i++) {
    const result = drawRandomCards(deck, 3);
    const uniqueUris = new Set(result.map(card => card.uri));
    expect(uniqueUris.size).toBe(3);
  }
});

test('only returns cards that belong to the input deck', () => {
  const result = drawRandomCards(deck, 3);
  result.forEach(card => {
    expect(deck).toContainEqual(card);
  });
});

test('does not mutate the input deck', () => {
  const original = [...deck];
  drawRandomCards(deck, 3);
  expect(deck).toEqual(original);
});
