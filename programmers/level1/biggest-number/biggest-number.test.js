function solution(numbers) {
  const stringNumber = numbers.map(number => number.toString());
  return stringNumber.sort((a, b) => (b + a) - (a + b)).join("");
}

test("run", () => {
  expect(solution(
    [6, 10, 2]
  )).toEqual("6210");

  expect(solution(
    [3, 30, 34, 5, 9]
  )).toEqual("9534330");
});
