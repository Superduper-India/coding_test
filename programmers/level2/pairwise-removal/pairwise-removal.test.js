const solution = (s) => {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    // 스택 배열이 빈배열이면, 요소 채워주기
    if (!stack.length) stack.push(s[i]);
    else {
      if (stack[stack.length - 1] !== s[i]) {
        stack.push(s[i]);
        console.log("스택의 마지막 요소와 현재 요소가 일치하지 않는다.", stack);
      } else {
        // stack = []대신 stack.pop()을 사용하니까 테스트를 통과할 수 있었다
        stack.pop();
        console.log("스택의 마지막 요소와 현재 요소가 일치한다.", stack);
      }
    }
  }

  return stack.length ? 0 : 1;
};

test("run", () => {
  expect(solution("baabaa")).toBe(1);
  expect(solution("cdcd")).toBe(0);
});
