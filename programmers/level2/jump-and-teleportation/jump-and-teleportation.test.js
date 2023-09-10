// 원하는 것
// 아이언 슈트 구매자가 이동하려는 거리 N이 주어졌을 때, 사용해야 하는 건전지 사용량의 최솟값을 return하는 solution 함수

// 조건
// 아이언 슈트: 1. 한 번에 K칸을 앞으로 점프(K만큼 건전지 사용량이 줄어듬), 2. 현재까지 온 거리 x2에 해당하는 위치로 순간이동(건전지 사용량이 줄지 않음)

// 즉 순간이동을 최대한 해야한다. n에서 도착지점으로 돌아온다고 가정했을때 2로 계속해서 나누어준다. 나누어 떨어지면 n만 2로 나눈값을 재할당해주고 계속 가지만, 나누어 떨어지지 않는다면 한칸만 가는 것이므로 n을 하나만 빼주고, answer(건전지 사용량)을 하나만 증가시켜준다.

const solution = (n) => {
  let answer = 0;

  // n이 0보다 큰 경우에만 지속한다.
  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
      // console.log('짝수인 경우', n);
    } else {
      n--;
      // console.log('홀수인 경우', n);
      answer++;
    }
  }

  return answer;
};

test('run', () => {
  expect(solution(5)).toBe(2);
  expect(solution(6)).toBe(2);
  expect(solution(5000)).toBe(5);
});
