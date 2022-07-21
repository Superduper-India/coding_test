function solution(arr) {
  const answer = [];

  while (arr.length) {
    if (answer[answer.length - 1] != arr[0]) {
      answer.push(arr[0]);
      arr.shift();
    } else if (answer[answer.length - 1] == arr[0]) {
      arr.shift();
    }
  }

  return answer;
}

test("run", () => {
  expect(solution([1, 1, 3, 3, 0, 1, 1])).toEqual([1, 3, 0, 1]);
  expect(solution([4, 4, 4, 3, 3])).toEqual([4, 3]);
});
