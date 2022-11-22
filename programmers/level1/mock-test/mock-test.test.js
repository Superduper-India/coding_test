const makeRepeat = (dicAnswer) => {
  const repeatCount = Math.ceil(dicAnswer.length / 5);
  return new Array(repeatCount).fill(dicAnswer).flat();
};

const setCorrectCount = (value, answers) => {
  return value.filter((n, i) => n === answers[i]).length;
};

function solution(answers) {
  const finalAnswer = [];
  const dicAnswers = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const newDicAnswer = dicAnswers.map(dicAnswer => {
    return makeRepeat(dicAnswer);
  });

  const correctCount = newDicAnswer.map(arr => {
    return setCorrectCount(arr, answers);
  });

  const maxNum = Math.max(...correctCount); // 맞춘 수 중 최댓값 구하기

  correctCount.forEach((n, i) => {
    if (n === maxNum) finalAnswer.push(i + 1);
  });

  return finalAnswer.sort();
}

test("solution", () => {
  expect(solution([1, 2, 3, 4, 5])).toEqual([1]);
  expect(solution([1, 3, 2, 4, 2])).toEqual([1, 2, 3]);
});
