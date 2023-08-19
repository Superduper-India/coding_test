const solution = (n) => {
  let record = [0, 1];

  for (let i = 2; i <= n; i++) {
    record[i] = record[i - 1] + record[i - 2];
  }

  return record[n];
};

test('run', () => {
  expect(solution(3)).toBe(2);
  expect(solution(5)).toBe(5);
});
