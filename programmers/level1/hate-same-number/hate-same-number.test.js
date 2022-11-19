function solution(arr) {
  // solution1
  // const answer = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  // }

  // return answer;

  // solution2
  return arr.filter((num, i) => num !== arr[i + 1]);
}

test("run", () => {
  expect(solution([1, 1, 3, 3, 0, 1, 1])).toEqual([1, 3, 0, 1]);
  expect(solution([4, 4, 4, 3, 3])).toEqual([4, 3]);
});
