export function drawRandomCards(deck, count) {
  const pool = [...deck];
  const result = [];
  for (let i = 0; i < count && pool.length > 0; i++) {
    const randIndex = Math.floor(Math.random() * pool.length);
    [pool[randIndex], pool[pool.length - 1]] = [pool[pool.length - 1], pool[randIndex]];
    result.push(pool.pop());
  }
  return result;
}
