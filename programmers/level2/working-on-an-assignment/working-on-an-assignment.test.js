// 1. 원하는 것
// 과제 계획을 담은 이차원 문자열 배열 plans가 매개변수로 주어질 때, 과제를 끝낸 순서대로 이름을 배열에 담아 return 하는 solution 함수를 완성

// 2. 조건
// 과제는 시작하기로 한 시각이 되면 시작한다.
// 새로운 과제를 시작할 시각이 되었을 때, 기존에 진행 중이던 과제가 있으면 진행중이던 과제를 멈추고 새로운 과제를 시작한다.
// 진행중이던 과제를 끝냈을 때, 잠시 멈춘 과제가 있으면 멈춰둔 과제를 이어서 진행한다.
//  - 만약 과제를 끝낸 시각에 새로 시작해야 되는 과제와 잠시 멈춰둔 과제가 모두 있으면, 새로 시작해야 하는 과제부터 진행한다.

const timeToMin = (stringTime) => {
  const [hours, minutes] = stringTime.split(':').map(Number);
  return hours * 60 + minutes;
};

const solution = (plans) => {
  const answer = [];

  // 과제 계획은 시작 시간순으로 정렬되어야 한다.
  plans.sort((a, b) => {
    return timeToMin(a[1]) - timeToMin(b[1]);
  });

  // 1. 정시의 과제
  // 2. 진행중이던 과제
  // 3. 잠시 멈춘 과제
  const pausedWorks = [];

  while (plans.length > 1 || pausedWorks.length) {
    let [name, timeStr, min] = plans[0];
    let [nextName, nextTimeStr, _] = plans[1];
    const availableTime = timeToMin(nextTimeStr) - timeToMin(timeStr);
    console.log('진행중인 과제', name);

    if (Number(min) === availableTime) {
      // 과제가 정시에 끝난 경우
      answer.push(name);
      plans.shift();
      console.log('과제 끝남', answer, plans, '남은 시간:: ', availableTime);
    } else if (Number(min) < availableTime) {
      // 과제 끝나고도 시간이 남은 경우
      answer.push(name);
      plans.shift();
      console.log('과제 끝나고도 시간남음', answer, plans, '남은 시간:: ', availableTime);
    } else {
      pausedWorks.push([name, timeStr, min - availableTime]);
      plans.shift();
      console.log('과제가 아직 안끝남 plans:: ', plans, 'pausedWorks:: ', pausedWorks);
    }
  }

  answer.push(plans[plans.length - 1][0]);
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
  // expect(
  //   solution([
  //     ['science', '12:40', '50'],
  //     ['music', '12:20', '40'],
  //     ['history', '14:00', '30'],
  //     ['computer', '12:30', '100'],
  //   ])
  // ).toStrictEqual(['science', 'history', 'computer', 'music']);
  // expect(
  //   solution([
  //     ['aaa', '12:00', '20'],
  //     ['bbb', '12:10', '30'],
  //     ['ccc', '12:40', '10'],
  //   ])
  // ).toStrictEqual(['bbb', 'ccc', 'aaa']);
});
