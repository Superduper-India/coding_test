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
    const tempNum = i + 1;
    if (prices[i + 1] > prices[i]) answer.push(len - tempNum);
    else if (prices[i + 1] < prices[i]) answer.push(prices[i] - prices[i + 1]);
    else answer.push(0);
  }

  return answer;
};

test('run', () => {
  expect(solution([1, 2, 3, 2, 3])).toStrictEqual([4, 3, 1, 1, 0]);
  // expect(solution([5, 8, 6, 2, 4, 1])).toStrictEqual([3, 1, 1, 2, 1, 0]);
});
