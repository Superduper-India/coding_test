const solution = (s) => {
  // 테스트 통과 x
  let stack = [];
  for (let i = 1; i <= s.length; i++) {
    // 스택 배열이 빈배열이면, 요소 채워주기
    if (!stack[stack.length - 1]) stack.push(s[i - 1]);
    else {
      if (stack[stack.length - 1] !== s[i - 1]) stack.push(s[i - 1]);
      else stack = [];
    }
  }

  return stack.length ? 0 : 1;
};

test("run", () => {
  expect(solution("baabaa")).toBe(1);
  expect(solution("cdcd")).toBe(0);
});
