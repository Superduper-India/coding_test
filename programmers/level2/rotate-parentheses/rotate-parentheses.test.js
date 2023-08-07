const solution = (s) => {
  const stack = [];
  let count = 0;
  let isRight = true;
  // s의 길이가 홀수면 올바른 괄호 문자열이 될 수 없다.
  if (s.length % 2 === 1) return 0;

  for (let i = 0; i < s.length; i++) {
    let temp = s.slice(i) + s.slice(0, i);
    isRight = true;
    for (const letter of temp) {
      if (letter === "(" || letter === "{" || letter === "[")
        stack.push(letter);
      else {
        let leftWord = stack.pop();
        if (leftWord === "(" && letter === ")") continue;
        if (leftWord === "{" && letter === "}") continue;
        if (leftWord === "[" && letter === "]") continue;
        isRight = false;
        break;
      }
    }

    if (isRight) count++;
  }

  return count;
};

test("run", () => {
  expect(solution("[](){}")).toBe(3);
  expect(solution("}]()[{")).toBe(2);
  expect(solution("[)(]")).toBe(0);
  expect(solution("}}}")).toBe(0);
});
