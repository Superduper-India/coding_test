// 원하는 것
// 아이언 슈트 구매자가 이동하려는 거리 N이 주어졌을 때, 사용해야 하는 건전지 사용량의 최솟값을 return하는 solution 함수

// 조건
// 아이언 슈트: 1. 한 번에 K칸을 앞으로 점프(K만큼 건전지 사용량이 줄어듬), 2. 현재까지 온 거리 x2에 해당하는 위치로 순간이동(건전지 사용량이 줄지 않음)

const solution = (n) => {
  // 남은 거리는 n이다.
  let distance = n;
  // 현재까지 온 거리는 전체 거리에서 남은거리를 뺀 거리이다.
  let current = 0;
  // 건전지 사용량은 점프함수에서만 추가된다.
  let usedBateri = 0;
  const answer = [];

  // 점프하는 함수 distance~1까지 인수가 주어진다.
  const jump = (jumpDistance) => {
    // 남은 거리를 업데이트 한다.
    distance = distance - jumpDistance;
    // 현재까지 온 거리를 업데이트 한다.
    current = n - distance;
    // 사용한 건전지 사용량을 업데이트 한다.
    usedBateri += jumpDistance;
  };

  // 순간이동하는 함수
  const getTeleportation = () => {
    // 남은 거리를 업데이트 한다.
    distance = n - current * 2;
    current = n - distance;
  };

  console.log(n % 2);

  // jump(5);

  // jump(2);
  // getTeleportation();
  // jump(1);

  // jump(1);
  // getTeleportation();
  // getTeleportation();
  // jump(1);

  for (let i = n; i > 0; i--) {
    if (i % 2 == 1) {
      // i가 홀수인 경우
    } else {
      // i가 짝수인 경우
    }
  }

  console.log('남은거리', distance, '현재까지 온 거리', current, '사용한 배터리', usedBateri, answer);
};

test('run', () => {
  expect(solution(5)).toBe(2);
  expect(solution(6)).toBe(2);
  expect(solution(5000)).toBe(5);
});
