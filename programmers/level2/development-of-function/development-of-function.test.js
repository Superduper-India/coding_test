function solution(progresses, speeds) {
  const answer = [0];

  const leftDays = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));

  let maxDay = leftDays[0];

  for (let i = 0, j = 0; i < leftDays.length; i++) {
    if (leftDays[i] <= maxDay) {
      // 현재 숫자가 같거나 작으면 1증가
      answer[j] += 1;
    } else {
      // 현재 숫자가 크면 maxDay를 갱신
      maxDay = leftDays[i];
      // 현재 숫자가 크면 answer 인덱스를 갱신
      answer[++j] = 1;
    }
  }

  return answer;
}

test('run', () => {
  expect(solution([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
  expect(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])).toEqual([1, 3, 2]);
});
