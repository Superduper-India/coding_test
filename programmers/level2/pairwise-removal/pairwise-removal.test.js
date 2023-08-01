const solution = (s) => {
  // toDo 배열로 풀지말고 스택으로 풀어라
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    // 지금 인덱스와 다음 인덱스의 문자가 일치하면 stack배열에서 pop(제거)한다.
    // 지금 인덱스와 다음 인덱스의 문자가 일치하지 않으면 stack배열에 push(추가)한다.
    if (!stack.length || stack[stack.length - 1] !== s[i]) stack.push(s[i]);
    else stack.pop();
  }

  return stack.length ? 0 : 1;
};

test("run", () => {
  expect(solution("baabaa")).toBe(1);
  expect(solution("cdcd")).toBe(0);
});
