function solution(arr) {
  const answer = [];

  arr.forEach((number, index) => {
    if (number !== arr[index + 1]) {
      answer.push(number);
    }
  });

  return answer;
}

test("run", () => {
  expect(solution([1, 1, 3, 3, 0, 1, 1])).toEqual([1, 3, 0, 1]);
  expect(solution([4, 4, 4, 3, 3])).toEqual([4, 3]);
});
