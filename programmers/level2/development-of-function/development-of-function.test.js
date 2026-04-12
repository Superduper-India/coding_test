function solution(progresses, speeds) {
  const answer = [0];

  // 100에서 progresses[i]를 뺀 값을 speeds[i]로 나눈 값을 올림하여 남은 일수를 구한다.
  const leftDays = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));

  let deployDay = leftDays[0];

  for (let i = 0, j = 0; i < leftDays.length; i++) {
    if (deployDay >= leftDays[i]) {
      answer[j] += 1;
    } else {
      deployDay = leftDays[i];
      answer[++j] = 1;
    }
  }

  return answer;
}

test('run', () => {
  expect(solution([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
  expect(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])).toEqual([1, 3, 2]);
});
