function solution(numbers) {
  const fullNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  numbers.sort((a, b) => a - b);

  const unknownNumbers = fullNumbers.filter(number => !numbers.includes(number));

  return unknownNumbers.reduce((sum, currValue) => {
    return sum + currValue;
  }, 0);
}

test("run", () => {
  expect(solution(
    [1, 2, 3, 4, 6, 7, 8, 0], [5, 8, 4, 0, 6, 7, 9]
  )).toEqual(
    14, 6
  );
});
