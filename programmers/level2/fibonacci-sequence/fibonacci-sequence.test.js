const solution = (n) => {
  let record = [0, 1];

  // 테스트 케이스 7부터 실패 => 여기에서 % 1234567 연산자를 적용해주면 통과
  for (let i = 2; i <= n; i++) {
    record[i] = (record[i - 1] + record[i - 2]) % 1234567;
  }

  return record[n];
};

test('run', () => {
  expect(solution(3)).toBe(2);
  expect(solution(5)).toBe(5);
});
