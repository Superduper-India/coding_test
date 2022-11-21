const calcCorrect = (lottos, winNums) => {
  return lottos.filter(num => winNums.includes(num)).length;
};

const calcZero = (lottos) => {
  return lottos.filter(num => num === 0).length;
};

function solution(lottos, win_nums) {
  const correctCount = calcCorrect(lottos, win_nums);
  const zeroCount = calcZero(lottos);

  const worstRank = 7 - correctCount >= 6 ? 6 : 7 - correctCount;
  const bestRank = worstRank - zeroCount <= 0 ? 1 : worstRank - zeroCount;

  return [bestRank, worstRank];
}

test("run", () => {
  expect(solution(
    [44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]
  )).toEqual([3, 5]);
  expect(solution(
    [0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]
  )).toEqual([1, 6]);
  expect(solution(
    [45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]
  )).toEqual([1, 1]);
});
