function solution(data, col, row_begin, row_end) {
  data.sort((a, b) => a[col - 1] - b[col - 1] || b[0] - a[0]);

  return data
    .map((row, idx) => row.reduce((acc, curr) => acc + (curr % (idx + 1)), 0))
    .slice(row_begin - 1, row_end)
    .reduce((acc, curr) => acc ^ curr, 0);
}

test('run', () => {
  expect(
    solution(
      [
        [2, 2, 6],
        [1, 5, 10],
        [4, 2, 9],
        [3, 8, 3],
      ],
      2,
      2,
      3,
    ),
  ).toBe(4);
});
