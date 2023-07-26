// 문자열 첫글자를 문자열 마지막으로 이동하여 반환
const makeRotation = (string) => {
  return string.substring(1, string.length) + string[0];
};

const solution = (s) => {
  let count = 0;

  // 올바른 문자열인지 확인하는 함수
  const checkTheCorrect = (string) => {
    const arr = [];
    let result;

    for (let i = 0; i < string.length; i += 2) {
      arr.push([string[i], string[i + 1]]);
    }

    arr.forEach((item) => {
      const left = item[0];
      const right = item[1];
      if (
        (left === "[" && right === "]") ||
        (left === "(" && right === ")") ||
        (left === "{" && right === "}")
      ) {
        result = true;
      } else result = false;
    });

    return result;
  };

  for (let i = 0; i < s.length; i++) {
    const result = checkTheCorrect(s);
    s = makeRotation(s);
    if (result) count += 1;
  }

  return count;
};

test("run", () => {
  expect(solution("[](){}")).toBe(3);
  expect(solution("}]()[{")).toBe(2);
  expect(solution("[)(]")).toBe(0);
  expect(solution("}}}")).toBe(0);
});
