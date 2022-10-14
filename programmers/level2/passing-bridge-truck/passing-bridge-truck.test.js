function solution(bridge_length, weight, truck_weights) {
  const passing_trucks = [];
  const passed_trucks = [];
  let second = 1;
  let total_weight = 0;

  let i = 0;
  const length = truck_weights.length;
  while (i < length) {
    if (
      passing_trucks.length <= bridge_length &&
      total_weight <= weight
    ) {
      total_weight += truck_weights.shift();
      passed_trucks.push(truck_weights.shift());
      console.log(passed_trucks);
    }
    i++;
  }
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
