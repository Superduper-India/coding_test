function solution(numbers, target) {
  let answer = 0;

  function dfs(idx = 0, sum = 0) {
    // 마지막 인덱스일때,
    if (idx === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  }

  dfs();

  return answer;
}

test('solution', () => {
  expect(solution([1, 1, 1, 1, 1], 3)).toBe(5);
  expect(solution([4, 1, 2, 1], 4)).toBe(2);
});
