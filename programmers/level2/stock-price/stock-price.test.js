const solution = (prices) => {
  const answer = [];

  // 전체초
  const totalSec = prices.length;

  for (let index = 1; index <= totalSec; index++) {
    if (index > 0) {
      const currPrice = prices[index - 1];
      const nextPrice = prices[index];
      const currSec = index;
      const prevSec = index - 1;

      // 1. 가격이 떨어지지 않으면 (즉, 다음 인덱스의 요소가 현재 인덱스의 요소에 비해서 크면)
      // => 전체초 - 현재초(index+1)
      if (nextPrice > currPrice) answer.push(totalSec - currSec);
      // 2. 가격이 떨어지면 (즉, 다음 인덱스의 요소가 현재 인덱스의 요소에 비해서 작으면)
      // => 현재초 - 이전초
      else if (nextPrice < currPrice) answer.push(currSec - prevSec);
      else answer.push(totalSec - currSec);
    }
  }

  return answer;
};

test("run", () => {
  expect(solution([1, 2, 3, 2, 3])).toStrictEqual([4, 3, 1, 1, 0]);
  expect(solution([5, 8, 6, 2, 4, 1])).toStrictEqual([3, 1, 1, 2, 1, 0]);
});
