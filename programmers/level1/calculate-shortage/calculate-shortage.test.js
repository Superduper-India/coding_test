function solution(price, money, count) {
  let answer = 0;
  let totalPrice = 0;

  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }

  const change = totalPrice - money;

  if (change > 0) {
    answer = change;
  } else if (change <= 0) {
    answer;
  }

  return answer;
}

test("run", () => {
  expect(solution(3, 20, 4)).toBe(10);
});
