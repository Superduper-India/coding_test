function solution(n) {
  // let ternaryScale = n.toString(3);

  // 10진법을 3진법으로 변환하는 알고리즘구현
  let ternaryScale = "";

  while (n !== 1) {
    ternaryScale = (n % 3) + ternaryScale;
    n = parseInt(n / 3);
  }
  ternaryScale = n + ternaryScale;

  ternaryScale = ternaryScale.split("").reverse().join("");

  return Number.parseInt(ternaryScale, 3);
}

test("run", () => {
  expect(solution(45)).toBe(7);
  // expect(solution(125)).toBe(229);
});
