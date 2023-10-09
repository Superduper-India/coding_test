// 원하는 것
// 자연수 x, y, n이 매개변수로 주어질 때, x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return하도록 solution 함수를 완성, 이때 x를 y로 만들 수 없다면 -1을 return

// 조건
// 사용할 수 있는 연산은 다음과 같다.
// x에 n을 더합니다.
// x에 2를 곱합니다.
// x에 3을 곱합니다.

const solution = (x, y, n) => {
  const dp = new Array(y + 1).fill(Infinity);
  // x까지 도달하면 방법의 개수를 늘려야하므로 0을 할당
  // (마치 answer=0으로 초기화 하듯이)
  dp[x] = 0;

  for (let i = x; i <= y; i++) {
    // x에 n를 더해서 i(y)보다 작거나 같아지는 경우,
    if (x <= i - n) {
      dp[i] = Math.min(dp[i], dp[i - n] + 1);
      // dp[i] = dp[i - n] + 1;
    }
    if (i % 2 === 0 && x <= i / 2) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
      // dp[i] = dp[i / 2] + 1;
    }
    if (i % 3 === 0 && x <= i / 3) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
      // dp[i] = dp[i / 3] + 1;
    }
  }

  return dp[y] === Infinity ? -1 : dp[y];
};

test('run', () => {
  expect(solution(10, 40, 5)).toBe(2);
  expect(solution(10, 40, 30)).toBe(1);
  expect(solution(2, 5, 4)).toBe(-1);
});
