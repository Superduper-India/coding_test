function solution(numbers) {
  const toString = numbers.map(number => { return String(number); });
  const answer = toString.sort((a, b) => (b + a) - (a + b)).join("");

  return answer[0] === "0" ? "0" : answer;
}

test("run", () => {
  expect(solution(
    [6, 10, 2]
  )).toEqual("6210");
  expect(solution(
    [3, 30, 34, 5, 9]
  )).toEqual("9534330");
});
