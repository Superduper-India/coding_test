function solution(num) {
  let count = 0;

  // 재귀
  // if (num !== 1) { // num이 1이 아닌경우에 반복
  //   if (num % 2 === 1) { // 홀수
  //     solution((num * 3) + 1);
  //   } else { // 짝수
  //     solution(num / 2);
  //   }
  // } return num;

  if (num === 1) {
    return 0;
  } else {
    while (num !== 1) { // num이 1이 될때까지 반복문 시행
      count++;
      num % 2 ? num = (num * 3) + 1 : num = num / 2;
      if (count === 500) break;
    }
    if (count === 500) return -1;
    return count;
  }
}

test("run", () => {
  expect(solution(6)).toStrictEqual(8);
  expect(solution(16)).toStrictEqual(4);
  expect(solution(1)).toStrictEqual(0);
  expect(solution(626331)).toStrictEqual(-1);
});
