const solution = (s) => {
  const makeRotation = (string) => {
    // 문자열 첫글자를 문자열 마지막으로 이동하여 반환
    return string.substring(1, string.length) + string[0];
  };
  console.log(makeRotation(s));
};

test("run", () => {
  expect(solution("[](){}")).toBe(3);
  expect(solution("}]()[{")).toBe(2);
  expect(solution("[)(]")).toBe(0);
  expect(solution("}}}")).toBe(0);
});
