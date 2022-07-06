// 1. 문제를 코드로 번역하기
// 2. 새로운 사실을 알면 계획을 수정하기
// 3. 문맥 헷갈리지 말기
// 4. Host와 Service 분리해서 생각해보기

const isExistMoreThan = (value, arr) => {
  for (const v of arr) {
    if (value.priority < v.priority) {
      return true;
    }
  }

  return false;
};

// host
// service
const print = (priorities) => {
  // 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
  const result = priorities.shift();
  // 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
  if (isExistMoreThan(result, priorities)) {
    priorities.push(result);
    return [null, priorities];
  }

  // 3. 그렇지 않으면 J를 인쇄합니다.
  return [result, priorities];
};

const run = (priorities, location, count = 0) => {
  // 프린트해라
  const [result, newPriorities] = print(priorities);
  if (!result) {
    return run(newPriorities, location, count);
  }

  if (result.originIndex !== location) {
    return run(newPriorities, location, count + 1);
  }

  return count + 1;
};
function solution(priorities, location) {
  const p = priorities.map((priority, index) => ({
    originIndex: index,
    priority,
  }));

  return run(p, location);


  // const print = [];

  // priorities.map(number => {
  //   if (priorities[location] < number) {
  //     priorities.splice(priorities[location], 1).push(priorities[location]);
  //   } else if (priorities[location] > number) {
  //     print.push(priorities[location]);
  //   }
  // });

}

test("run", () => {
  expect(solution([2, 1, 3, 2], 2)).toBe(1);
  expect(solution([2, 1, 3, 2], 1)).toBe(4);
  expect(solution([2, 1, 3, 2], 0)).toBe(3);
  expect(solution([2, 1, 3, 2], 3)).toBe(2);
  expect(solution([1, 1, 9, 1, 1, 1], 0)).toBe(5);
});
