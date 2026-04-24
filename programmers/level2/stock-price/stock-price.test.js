// 원하는 것
// 초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성

const solution = (prices) => {
  let count = 0;
  const answer = [];
  const stack = [];

  for (let i = prices.length - 1; i >= 0; i--) {
    stack.push(prices[i]);
  }

  while (stack.length) {
    const firstIn = stack.pop();

    for (let i = stack.length - 1; i >= 0; i--) {
      if (stack[i] < firstIn) {
        count++;
        break; // 가격 떨어지면 반복문 정지
      } else {
        count++;
      }
    }

    answer.push(count);
    count = 0;
  }

  return answer;
};

test('run', () => {
  expect(solution([1, 2, 3, 2, 3])).toStrictEqual([4, 3, 1, 1, 0]);
  expect(solution([5, 8, 6, 2, 4, 1])).toStrictEqual([3, 1, 1, 2, 1, 0]);
});
