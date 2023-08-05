const solution = (k, tangerine) => {
  let map = new Map();
  tangerine.forEach((dd) => {
    map.set(dd, (map.get(dd) || 0) + 1);
  });

  const maxNum = Math.max(...map.values());

  if (maxNum > k) {
    return 1;
  } else {
    return k / maxNum;
  }
};

test('run', () => {
  expect(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])).toBe(3);
  expect(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])).toBe(2);
  expect(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])).toBe(1);
});
