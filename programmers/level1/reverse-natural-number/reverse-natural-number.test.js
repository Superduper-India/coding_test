function solution(n) {
  const strN = String(n);
  const arr = [];

  for (let i = strN.length - 1; i >= 0; i--) {
    arr.push(+strN[i]);
  }

  return arr;
}

test("run", () => {
  expect(solution(12345)).toStrictEqual([5, 4, 3, 2, 1]);
});
