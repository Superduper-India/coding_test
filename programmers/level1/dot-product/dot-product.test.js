function solution(a, b) {
  let sum = 0;

  a.map((n, i) => {
    sum = sum + n * b[i];
  });

  return sum;
}

test("run", () => {
  expect(solution(
    [1, 2, 3, 4], [-3, -1, 0, 2],
    [-1, 0, 1], [1, 0, -1]
  )).toEqual(3, -2);
});
