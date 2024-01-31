// 1. 원하는 것
// 사람들의 몸무게 목록 weights이 주어질 때, 시소 짝꿍이 몇 쌍 존재하는지 구하여 return 하도록 solution 함수를 완성

// 2. 조건
// - 시소가 평형인 상태에서 각각에 의해 시소에 걸리는 토크의 크기가 서로 상쇄되어 완전한 균형을 이룰 수 있다면 그 두 사람을 시소 짝꿍
// - 즉, (탑승한 사람의 무게 * 좌석 간의 거리)가 같다면 => 시소 짝꿍
// - 이 시소는 중심으로부터 2(m), 3(m), 4(m) 거리의 지점에 좌석이 하나씩 있다

const solution = (weights) => {
  // weights.sort();
  // let count = 0;
  // weights.forEach((w, index) => {
  //   // 왼쪽 사소를 차례로 구하는중
  //   let i = 2;
  //   let targetLeft = w * i;
  //   while (i <= 4) {
  //     console.log(targetLeft);
  //     // targetLeft의 비교 대상이 될 배열
  //     const compareWeights = weights.filter((_, i) => i !== index);
  //     compareWeights.forEach((cw) => {
  //       if (cw * 2 === targetLeft || cw * 3 === targetLeft || cw * 4 === targetLeft) count++;
  //     });
  //     console.log(compareWeights);
  //     i++;
  //     targetLeft = w * i;
  //   }
  //   console.log('한턴 끝');
  // });
  // console.log(count);
};

test('run', () => {
  expect(solution([100, 180, 360, 100, 270])).toBe(4);
});
