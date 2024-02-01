// 1. 원하는 것
// 사람들의 몸무게 목록 weights이 주어질 때, 시소 짝꿍이 몇 쌍 존재하는지 구하여 return 하도록 solution 함수를 완성

// 2. 조건
// - 시소가 평형인 상태에서 각각에 의해 시소에 걸리는 토크의 크기가 서로 상쇄되어 완전한 균형을 이룰 수 있다면 그 두 사람을 시소 짝꿍
// - 즉, (탑승한 사람의 무게 * 좌석 간의 거리)가 같다면 => 시소 짝꿍
// - 이 시소는 중심으로부터 2(m), 3(m), 4(m) 거리의 지점에 좌석이 하나씩 있다

const solution = (weights) => {
  let count = 0;
  const map = new Map();
  // 가능한 비율 경우의 수
  const ratio = [1, 3 / 2, 2, 4 / 3];

  // 내림차순 정렬 왜지??
  weights
    .sort((a, b) => b - a)
    .forEach((w) => {
      console.log('사람 몸무게', w);

      // 하나의 몸무게에 대한 가능한 모든 비율을 적용하여 짝궁을 찾는다
      ratio.forEach((r) => {
        console.log('적용가능한 비율', r);
        console.log('몸무게 * 비율', w * r);

        // 아래 로직의 이유는?
        if (map.has(w * r)) {
          // console.log('짝꿍을 찾았다!');
          count += map.get(w * r);
        }
      });

      // 중복 값 카운트
      map.set(w, (map.get(w) || 0) + 1);
    });

  console.log(count);
  return count;
};

test('run', () => {
  expect(solution([100, 180, 360, 100, 270])).toBe(4);
});
