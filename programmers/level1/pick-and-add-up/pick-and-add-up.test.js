function solution(numbers) {
  const len = numbers.length;
  const set = new Set();

  for (let i = 0; i < len; i++) {
    for (let j = 1; j < len; j++) {
      if (i !== j) {
        set.add(numbers[i] + numbers[j]);
      }
    }
  }

  return [...set].sort((a, b) => a - b);
}

test("run", () => {
  expect(solution([2, 1, 3, 4, 1])).toEqual([2, 3, 4, 5, 6, 7]);
  expect(solution([5, 0, 2, 7])).toEqual([2, 5, 7, 9, 12]);
});
