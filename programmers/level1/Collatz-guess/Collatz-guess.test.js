const isEven = (number) => number % 2 === 0;

function solution(num, count = 0) {
  // 재귀
  if (count >= 500) {
    return -1;
  }

  if (num === 1) {
    return count;
  }

  if (isEven(num)) {
    return solution(num / 2, count + 1);
  } else {
    return solution(num * 3 + 1, count + 1);
  }


  // 반복문
  // if (num === 1) {
  //   return 0;
  // } else {
  //   while (num !== 1) { // num이 1이 될때까지 반복문 시행
  //     count++;
  //     num % 2 ? num = (num * 3) + 1 : num = num / 2;
  //     if (count === 500) break;
  //   }
  //   if (count === 500) return -1;
  //   return count;
  // }
}

test("run", () => {
  expect(solution(6)).toStrictEqual(8);
  expect(solution(16)).toStrictEqual(4);
  expect(solution(1)).toStrictEqual(0);
  expect(solution(626331)).toStrictEqual(-1);
});
