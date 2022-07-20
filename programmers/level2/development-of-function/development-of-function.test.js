function solution(progresses, speeds) {
  let answer = [0];
  const len = progresses.length;
  const leftDays = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    leftDays[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
  }

  let maxDay = leftDays[0];

  for (let i = 0, j = 0; i < len; i++) {
    if (leftDays[i] <= maxDay) { // 7이 7이랑 같거나 작으면, 
      answer[j] += 1; // answer[0]이 1 증가
    } else { // 9는 7보다 크다.
      maxDay = leftDays[i]; // maxDay는 9로 갱신되고,
      answer[++j] = 1; // answer[1]을 1부터 시작한다.
    }
  }

  return answer;
}

test("run", () => {
  expect(solution(
    [93, 30, 55], [1, 30, 5]
  )).toEqual([2, 1]);
  expect(solution(
    [95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]
  )).toEqual([1, 3, 2]);
});
