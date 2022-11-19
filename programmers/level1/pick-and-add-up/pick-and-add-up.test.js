function solution(numbers) {
  const arr = [];

  numbers.forEach((n, index) => {
    for (let i = index + 1; i < numbers.length; i++) {
      arr.push(n + numbers[i]);
    }
  });

  return [...new Set(arr)].sort((a, b) => a - b);
}

test("run", () => {
  expect(solution([2, 1, 3, 4, 1])).toEqual([2, 3, 4, 5, 6, 7]);
  expect(solution([5, 0, 2, 7])).toEqual([2, 5, 7, 9, 12]);
});
