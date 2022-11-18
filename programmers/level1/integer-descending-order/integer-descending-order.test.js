function solution(n) {
  const arr = [];

  for (const number of String(n)) {
    arr.push(+number);
  }

  return +arr.sort((a, b) => b - a).join("");
}

test("run", () => {
  expect(solution(118372)).toStrictEqual(873211);
});
