const solution = (n) => {
  let i = 1;
  let count = 0;

  while (i <= n) {
    // n의 약수이면서 홀수인 경우, count를 증가시킨다.
    if (n % i === 0 && i % 2 === 1) {
      count++;
    }
    i++;
  }

  return count;
};

test("run", () => {
  expect(solution(15)).toBe(4);
});
