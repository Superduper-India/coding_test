function solution(numbers, target) {
  let count = 0;
  dfs(0, 0);

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        count++;
      } return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  return count;
}

test("solution", () => {
  expect(solution([1, 1, 1, 1, 1], 3)).toBe(5);
  expect(solution([4, 1, 2, 1], 4)).toBe(2);
});
