const solution = (s) => {
  let count = 0;

  for (let i = 0; i < s.length / 2; i++) {
    // 다음요소랑 같으면(연속되면) 1, 그게 아니면 0
    count = s[i - 1] === s[i] ? 1 : 0;
  }

  return count;
};

test('run', () => {
  expect(solution('baabaa')).toBe(1);
  expect(solution('cdcd')).toBe(0);
});
