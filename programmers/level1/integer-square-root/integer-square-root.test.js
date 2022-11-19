function solution(n) {
  const squareRoot = Math.sqrt(n);
  return squareRoot % 1 ? -1 : Math.pow(squareRoot + 1, 2);
}

test("run", () => {
  expect(solution(121)).toBe(144);
  expect(solution(3)).toBe(-1);
});
