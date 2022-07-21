function solution(bridge_length, weight, truck_weights) {
  const bridge = Array.from({ length: bridge_length }, () => 0);
  let second = 0;

  while (bridge.length) {
    bridge.shift();
    second += 1;

    if (truck_weights.length) {
      const sumTruckWeight = bridge.reduce(function addUp(sum, current) {
        return sum + current;
      });

      if (sumTruckWeight + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }
  }

  return second;
}

test("run", () => {
  expect(solution(
    2, 10, [7, 4, 5, 6]
  )).toEqual(8);
  expect(solution(
    100, 100, [10]
  )).toEqual(101);
  expect(solution(
    100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
  )).toEqual(110);
});
