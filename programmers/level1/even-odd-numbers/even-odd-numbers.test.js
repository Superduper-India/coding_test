function solution(num) {
  // if (num % 2 === 0) {
  //   return "Even";
  // }
  // if (num % 2 === 1) {
  //   return "Odd";
  // }

  return num % 2 == 0 ? "Even" : "Odd";
}

test("run", () => {
  expect(solution(3, 4, 0)).toEqual("Odd", "Even", "Even");
});
