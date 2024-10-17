// 1. 원하는 것
// 과제 계획을 담은 이차원 문자열 배열 plans가 매개변수로 주어질 때, 과제를 끝낸 순서대로 이름을 배열에 담아 return 하는 solution 함수를 완성

// 2. 조건
// 과제는 시작하기로 한 시각이 되면 시작한다.
// 새로운 과제를 시작할 시각이 되었을 때, 기존에 진행 중이던 과제가 있으면 진행중이던 과제를 멈추고 새로운 과제를 시작한다.
// 진행중이던 과제를 끝냈을 때, 잠시 멈춘 과제가 있으면 멈춰둔 과제를 이어서 진행한다.
//  - 만약 과제를 끝낸 시각에 새로 시작해야 되는 과제와 잠시 멈춰둔 과제가 모두 있으면, 새로 시작해야 하는 과제부터 진행한다.

// 문자열 시간을 분 숫자 기준으로 변경하기
const getMin = (stringTime) => {
  const [hour, min] = stringTime.split(':');
  return Number(hour) * 60 + Number(min);
};

const solution = (plans) => {
  const answer = [];
  // 후입선출 스택을 이용해서 진행중이던 과제 마저 이어하기
  const stack = [];
  // 선입선출 큐를 이용해서 새로운 과제 진행하기
  const queue = plans
    .map((plan) => {
      const [name, time, spend] = plan;
      const minTime = getMin(time);
      return [name, minTime, Number(spend)];
    })
    .sort((a, b) => a[1] - b[1]); // 오름차순 정렬

  while (queue.length) {
    let [currName, currTime, currSpend] = queue.shift();
    if (!queue.length) {
      answer.push(currName);
      break;
    }
    const [nextName, nextTime, nextSpend] = queue[0];
    let leftTime = currSpend - (nextTime - currTime);

    if (leftTime > 0) {
      // 남은 시간이 0보다 크면, (즉, 일이 아직 안끝났으면)
      stack.push([currName, leftTime]);
    } else if (leftTime < 0) {
      // 과제를 끝내고 시간이 남으면,
      answer.push(currName);
      const [name, time] = stack.pop();
      stack.push([name, time + leftTime]);
    } else {
      // 과제를 끝냈으면
      answer.push(currName);
    }
  }

  while (stack.length) {
    answer.push(stack.pop()[0]);
  }
  return answer;
};

test('run', () => {
  expect(
    solution([
      ['korean', '11:40', '30'],
      ['english', '12:10', '20'],
      ['math', '12:30', '40'],
    ])
  ).toStrictEqual(['korean', 'english', 'math']);
  expect(
    solution([
      ['science', '12:40', '50'],
      ['music', '12:20', '40'],
      ['history', '14:00', '30'],
      ['computer', '12:30', '100'],
    ])
  ).toStrictEqual(['science', 'history', 'computer', 'music']);
  expect(
    solution([
      ['aaa', '12:00', '20'],
      ['bbb', '12:10', '30'],
      ['ccc', '12:40', '10'],
    ])
  ).toStrictEqual(['bbb', 'ccc', 'aaa']);
});
