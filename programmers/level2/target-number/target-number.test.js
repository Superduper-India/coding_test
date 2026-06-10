// 깊이 우선 탐색(순열)

function solution(numbers, target) {
  let count = 0;

  function dfs(idx, sum) {
    if (idx === numbers.length) {
      if (sum === target) count++;
      return;
    }

    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  }

  dfs(0, 0);

  return count;
}

test('solution', () => {
  expect(solution([1, 1, 1, 1, 1], 3)).toBe(5);
  expect(solution([4, 1, 2, 1], 4)).toBe(2);
});
