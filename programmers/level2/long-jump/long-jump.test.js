const solution = (n) => {
  const dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    // toAsk % 1234567하는 이유?
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    console.log(dp[i] % 1234567);
    console.log(dp[i]);
  }
  return dp[n];
};

test("run", () => {
  expect(solution(4)).toBe(5);
  expect(solution(3)).toBe(3);
});
