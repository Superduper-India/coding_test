function solution(array, commands) {
  const answer = [];

  commands.map(command => {
    const newArr = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
    answer.push(newArr[command[2] - 1]);
  });

  return answer;
}

test("run", () => {
  expect(solution(
    [1, 5, 2, 6, 3, 7, 4],
    [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
  )).toEqual([5, 6, 3]);
});
