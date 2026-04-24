function solution(bridge_length, weight, truck_weights) {
  const bridge = Array.from({ length: bridge_length }).fill(0);
  let maxWeight = 0;
  let count = 0;

  count++; // 시간 카운트
  bridge.shift();
  maxWeight += truck_weights[0]; // 하중 추가
  bridge.push(truck_weights.shift()); // 다리 건너는 트럭추가

  // 다리 위에 트럭이 남아있는 동안 반복문
  while (maxWeight > 0) {
    count++; // 시간 카운트

    maxWeight -= bridge.shift();

    // 가능하면 하중추가
    if (maxWeight + truck_weights[0] <= weight) {
      maxWeight += truck_weights[0]; // 하중 추가
      bridge.push(truck_weights.shift()); // 다리 건너는 트럭추가
    } else {
      bridge.push(0);
    }
  }

  return count;
}

test('run', () => {
  expect(solution(2, 10, [7, 4, 5, 6])).toEqual(8);
  expect(solution(100, 100, [10])).toEqual(101);
  expect(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toEqual(110);
});
