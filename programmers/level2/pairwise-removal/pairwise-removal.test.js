const solution = (s) => {
  const stack = [];

  for (const char of s) {
    if (stack[stack.length - 1] === char) stack.pop();
    else stack.push(char);
  }

  return stack.length > 0 ? 0 : 1;
};

test('run', () => {
  expect(solution('baabaa')).toBe(1);
  expect(solution('cdcd')).toBe(0);
});
