const checkTheCorrection = (string) => {
  const tempArr = [];
  let result;

  for (let i = 0; i < string.length; i += 2) {
    tempArr.push([string[i], string[i + 1]]);
  }

  tempArr.forEach(([left, right]) => {
    if (
      (left === "[" && right === "]") ||
      (left === "(" && right === ")") ||
      (left === "{" && right === "}")
    )
      result = true;
    else result = false;
  });

  return result;
};

const rotation = (string) => {
  return string.substring(1) + string[0];
};

const solution = (s) => {
  let count = 0;

  // 0부터 5까지 반복문으로 돌리기
  for (let i = 0; i < s.length; i++) {
    s = rotation(s);
    console.log(checkTheCorrection(s));
  }

  return count;
};

test("run", () => {
  expect(solution("[](){}")).toBe(3);
  expect(solution("}]()[{")).toBe(2);
  expect(solution("[)(]")).toBe(0);
  expect(solution("}}}")).toBe(0);
});
