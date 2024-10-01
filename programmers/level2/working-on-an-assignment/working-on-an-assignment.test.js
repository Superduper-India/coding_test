// 1. 원하는 것
// 과제 계획을 담은 이차원 문자열 배열 plans가 매개변수로 주어질 때, 과제를 끝낸 순서대로 이름을 배열에 담아 return 하는 solution 함수를 완성

// 2. 조건
// 과제는 시작하기로 한 시각이 되면 시작한다.
// 새로운 과제를 시작할 시각이 되었을 때, 기존에 진행 중이던 과제가 있으면 진행중이던 과제를 멈추고 새로운 과제를 시작한다.
// 진행중이던 과제를 끝냈을 때, 잠시 멈춘 과제가 있으면 멈춰둔 과제를 이어서 진행한다.
//  - 만약 과제를 끝낸 시각에 새로 시작해야 되는 과제와 잠시 멈춰둔 과제가 모두 있으면, 새로 시작해야 하는 과제부터 진행한다.

const solution = (plans) => {
  const answer = [];

  // 과제 계획은 시작 시간순으로 정렬되어야 한다.
  const queue = plans
    .map((plan) => {
      const [name, stringTime, spend] = plan;
      const [hours, minutes] = stringTime.split(':').map(Number);
      const timeToMin = hours * 60 + minutes;
      return [name, timeToMin, Number(spend)];
    })
    .sort((a, b) => a[1] - b[1]);

  const firstPlan = queue.shift();
  let currTime = firstPlan[1];
  const stack = [firstPlan];

  // console.log('queue:: ', queue, 'stack:: ', stack);

  while (queue.length) {
    const target = queue.shift();
    const [_name, time, _spend] = target;
    let timeDiff = time - currTime; // 다음 과제 시작까지
    currTime = time;
    // console.log('target:: ', target, 'timeDiff:: ', timeDiff);

    while (stack.length && timeDiff > 0) {
      // 남은시간이 있고, 진행중인 과제가 있을때 반복
      const latestPlan = stack.pop();
      const [lName, _lTime, lSpend] = latestPlan;
      if (lSpend <= timeDiff) {
        // 소요시간이 남은시간보다 작거나 같을때
        answer.push(lName);
        timeDiff -= lSpend;
        // console.log('과제 끝 answer:: ', answer, '남은 시간:: ', timeDiff);
      } else {
        // 소요시간이 남은시간보다 클때
        latestPlan[2] = lSpend - timeDiff; // 소요시간 업데이트
        timeDiff = 0;
        stack.push(latestPlan); // 다시 저장
        // console.log('과제 미루기 stack:: ', stack);
      }
    }

    stack.push(target);
    // console.log('스택 업데이트:: ', stack);
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
