// 1. 원하는 것
// 가로의 길이 W와 세로의 길이 H가 주어질 때, 사용할 수 있는 정사각형의 개수를 구하는 solution 함수를 완성

// 2. 조건
// 종이는 대각선 꼭지점 2개를 잇는 방향으로 잘려있다.

const getGcd = (targetA, targetB) => {
  let temp = targetA;
  targetA = targetB;
  targetB = temp % targetB;
  return targetB === 0 ? targetA : getGcd(targetA, targetB);
};

const solution = (w, h) => {
  // 대각선이 지나가는 단위 정사각형의 개수를 구하는 수학적인 공식이 있다.
  // 공식은 w+h - (w와 h의 최대공약수)
  const gcd = getGcd(w, h);
  // 전체 - (w+h - (w와 h의 최대공약수))
  const answer = w * h - (w + h - gcd);
  return answer;
};

test('run', () => {
  expect(solution(8, 12)).toBe(80);
});
