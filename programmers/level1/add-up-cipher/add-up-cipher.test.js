function solution(n) {
  let sum = 0;

  for (const number of String(n)) {
    sum += Number(number);
  }

  return sum;
}

test("run", () => {
  expect(solution(123)).toBe(6);
  expect(solution(987)).toBe(24);
});
