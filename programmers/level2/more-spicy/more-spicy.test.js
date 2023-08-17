// 음식의 스코빌 지수를 담은 배열 scoville, 원하는 스코빌 지수 K
const solution = (scoville, K) => {
  let answer = 0;

  // 실패 => 런타임 에러
  while (scoville[0] < K) {
    // 가장 작은 숫자
    const minN = Math.min(...scoville);
    // 그 다음 가장 작은 숫자
    const secMinN = Math.min(...scoville.filter((_, i) => i !== scoville.indexOf(minN)));

    scoville[0] = minN + secMinN * 2;
    scoville.splice(scoville.indexOf(secMinN), 1);
    answer++;
    if (scoville.length === 1) {
      answer = -1;
      break;
    }
  }

  return answer;
};

test('run', () => {
  expect(solution([1, 2, 3, 9, 10, 12], 7)).toBe(2);
});
