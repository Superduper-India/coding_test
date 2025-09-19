function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === '(' ? (count += 1) : (count -= 1);

    if (count < 0) break;
  }

  return count === 0 ? true : false;
}

test('run', () => {
  expect(solution('()()')).toBe(true);
  expect(solution('(())()')).toBe(true);
  expect(solution(')()(')).toBe(false);
  expect(solution('(()(')).toBe(false);
});
