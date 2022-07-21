function solution(priorities, location) {
  // 처음 위치를 기록해놓은 프린트 우선순위 
  // 배열 [0]이 처음순서고, [1]이 중요도
  const initialPriorities = priorities.map((priority, index) =>
    [index, priority]
  );
  const donePrint = [];
  priorities.sort((a, b) => b - a);

  while (priorities.length) {
    if (initialPriorities[0][1] == priorities[0]) {
      donePrint.push(initialPriorities.shift()[0]);
      priorities.shift();
    } else {
      const tmp = initialPriorities.shift();
      initialPriorities.push(tmp);
    }
  }

  return donePrint.indexOf(location) + 1; // location인덱스가 donePrint배열중 어디에 위치하는지 찾아줌.
}

test("run", () => {
  expect(solution([2, 1, 3, 2], 2)).toEqual(1);
  expect(solution([1, 1, 9, 1, 1, 1], 0)).toEqual(5);
});
