// 1. 원하는 것
// 맵과 시작 속도가 주어졌을때 캐릭터의 최종 속도를 계산하는 함수

// 2. 조건
// 캐릭터의 속도는 땅의 경사에 비례하여 증가하거나 감소한다.
// 경사로 인해 속도가 0 또는 0이하로 감소하여 캐릭터가 생명 1개를 잃는 경우는 함수는 즉시 최종 속도로 0을 반환
const solution = (initialSpeed, inclinations) => {
  let currentSpeed = initialSpeed;

  for (let i = 0; i < inclinations.length; i++) {
    if (currentSpeed <= 0) break;
    currentSpeed = currentSpeed - inclinations[i];
  }

  return currentSpeed <= 0 ? 0 : currentSpeed;
};

test('run', () => {
  expect(solution(60, [0, 30, 0, 40, 0])).toBe(0);
});
