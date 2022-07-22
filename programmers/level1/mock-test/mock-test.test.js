function solution(answers) {
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const count = [0, 0, 0];

  answers.map((answer, i) => {
    if (answer === a[i % 5]) {
      count[0]++;
    }
    if (answer === b[i % 8]) {
      count[1]++;
    }
    if (answer === c[i % 10]) {
      count[2]++;
    }
  });

  const maxNumber = Math.max(...count);

  let answer = [];
  count.map((c, i) => {
    if (c === maxNumber) {
      answer.push(i + 1);
    }
  });

  return answer;
  // numbers.forEach((number) => {
  //   number.forEach((n, i) => {
  //     if (answers[i] === n) {
  //       count++;
  //     }
  //   });

  //   countCorrect.push(count);
  //   count = 0;
  // });

  // let index = 0;
  // let beforeCount = 0;
  // const answer = [];
  // for (const currentCount of countCorrect) {
  //   if (beforeCount < currentCount) {
  //     beforeCount = currentCount;
  //     index++;
  //   } else if (beforeCount === currentCount) {
  //     beforeCount = currentCount;
  //     answer.push(index);
  //     index++;
  //   }
  // }

  // answer.push(index);
  // return answer;
}

test("solution", () => {
  expect(solution([1, 2, 3, 4, 5])).toEqual([1]);
  expect(solution([1, 3, 2, 4, 2])).toEqual([1, 2, 3]);
});
