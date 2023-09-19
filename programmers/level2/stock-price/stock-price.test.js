// 원하는 것
// 초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성

// 조건

const solution = (prices) => {
  const answer = [];
  const len = prices.length;

  // 아래는 주식가격
  // [1, 2, 3, 2, 3]
  // [1] 1 => 2 : up, prices.length - 1
  // [2] 2 => 3 : up, prices.length - 2
  // [3] 3 => 2 : down, 3 - 2
  // [4] 2 => 3 : up, prices.length - 4
  // [5] 3 => ? : ?, prices.length - 5

  for (let i = 0; i < len; i++) {
    let stack = prices[i]; // 현재 주식 가격
    let j = i + 1; // 비교 할 수의 index
    let sec = 0; // 가격이 떨어지지 않은 시간

    while (j < len + 1) {
      // j < 6 이면 진행
      if (stack <= prices[j]) {
        // 1. 나의 주식 가격이 다음 주식 가격보다 작거나 같으면 통과.
        sec += 1;
        j += 1;
        continue; // if문 끝냄 while문으로
      } else if (sec == 0 && stack > prices[j]) {
        // 2. 나의 주식 가격이 다음 주식 가격보다 크면 종료.
        sec = 1;
        answer.push(sec);
        sec = 0;
        break; // while문 끝냄
      } else if (sec == 0 && j == len) {
        // 3. 마지막 주식이면 0 반환.
        answer.push(sec);
        break; // while문 끝냄
      }
      answer.push(sec);
      sec = 0;
      break;
    }
  }

  console.log(answer);
  return answer;
};

test('run', () => {
  expect(solution([1, 2, 3, 2, 3])).toStrictEqual([4, 3, 1, 1, 0]);
  expect(solution([5, 8, 6, 2, 4, 1])).toStrictEqual([3, 1, 1, 2, 1, 0]);
});
