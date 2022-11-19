function solution(sizes) {
  const wallet = sizes.map(card => {
    return card[0] < card[1] ? [card[1], card[0]] : [card[0], card[1]];
  });

  const width = wallet.map(card => { return card[0]; });
  const height = wallet.map(card => { return card[1]; });

  return Math.max(...width) * Math.max(...height);
}

test("run", () => {
  expect(solution(
    [
      [60, 50],
      [30, 70],
      [60, 30],
      [80, 40]
    ]
  )).toBe(4000);
  expect(solution(
    [
      [10, 7],
      [12, 3],
      [8, 15],
      [14, 7],
      [5, 15]
    ]
  )).toBe(120);
  expect(solution(
    [
      [14, 4],
      [19, 6],
      [6, 16],
      [18, 7],
      [7, 11]
    ]
  )).toBe(133);
});
