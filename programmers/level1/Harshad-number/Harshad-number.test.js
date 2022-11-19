function solution(x) {
  let sum = 0;
  let tmpX = x;

  while (tmpX > 0) {
    sum += tmpX % 10;
    tmpX = Math.floor(tmpX / 10);
  }

  return x % sum === 0;
}

test("run", () => {
  expect(solution(10)).toBe(true);
  expect(solution(12)).toBe(true);
  expect(solution(11)).toBe(false);
  expect(solution(13)).toBe(false);
});
