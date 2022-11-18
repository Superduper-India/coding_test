function solution(a, b) {
  const arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = new Date(2016, (a - 1), b).getDay();
  return arr.find((i, index) => index === day);
}

test("run", () => {
  expect(solution(5, 24)).toBe("TUE");
});
