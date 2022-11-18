function solution(arr, divisor) {
  const answer = [];

  arr.forEach((i) => {
    if ((i % divisor) === 0) {
      answer.push(i);
    }
  });

  answer.length === 0 ?
    answer.push(-1) : answer.sort((a, b) => a - b);

  return answer;
}

test("run", () => {
  expect(solution([5, 9, 7, 10], 5)).toEqual([5, 10]);
  expect(solution([2, 36, 1, 3], 1)).toEqual([1, 2, 3, 36]);
  expect(solution([3, 2, 6], 10)).toEqual([-1]);
});
