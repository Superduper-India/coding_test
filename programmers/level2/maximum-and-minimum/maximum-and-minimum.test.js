const solution = (s) => {
  const stringArr = s.split(" ");

  // Math.max, Math.min함수가 문자열도 취급한다.
  return Math.min(...stringArr) + " " + Math.max(...stringArr);
};

test("run", () => {
  expect(solution("1 2 3 4")).toStrictEqual("1 4");
  expect(solution("-1 -2 -3 -4")).toStrictEqual("-4 -1");
  expect(solution("-1 -1")).toStrictEqual("-1 -1");
});
