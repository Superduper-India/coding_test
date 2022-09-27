function solution(absolutes, signs) {
  let sum = 0;

  absolutes.map((number, i) => {
    if (signs[i] === true) {
      sum = sum + number;
    }
    if (signs[i] === false) {
      sum = sum - number;
    }
  });

  return sum;
}

test("run", () => {
  expect(solution(
    [4, 7, 12], [true, false, true],
    [1, 2, 3], [false, false, true]
  )).toEqual(
    9, 0
  );
});
