function solution(price, money, count) {
  let needPrice = 0;
  let number = 1;

  while (number <= count) {
    needPrice = needPrice + price * number;
    number += 1;
  }

  return needPrice <= money ? 0 : needPrice - money;
}

test("run", () => {
  expect(solution(3, 20, 4)).toBe(10);
});
