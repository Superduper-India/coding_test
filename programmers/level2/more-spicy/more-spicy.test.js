// 음식의 스코빌 지수를 담은 배열 scoville, 원하는 스코빌 지수 K
const solution = (scoville, K) => {
  let answer = 0;
  let temp = [...scoville];

  // 실패 => 시간초과
  while (true) {
    const min = temp.shift();
    const secMin = temp.shift();
    // scovile에서 가장 작은 수가 K이상이면 반복문 탈출
    if (min >= K) break;
    if (temp.length == 1 && temp.shift() < K) {
      answer = -1;
      break;
    }
    // 위에 해당하지 않는다면, 스코빌 지수가 낮은 순서대로 섞어주기
    answer++;
    temp = [min + secMin * 2, ...temp];
  }

  return answer;
};

test('run', () => {
  expect(solution([1, 2, 3, 9, 10, 12], 7)).toBe(2);
});
