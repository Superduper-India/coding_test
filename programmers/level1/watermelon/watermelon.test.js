function solution(n) {
  let answer = "";

  for (let i = 1; i <= n; i++) {
    i % 2 ? answer += "수" : answer += "박";
  }

  return answer;
}

test("run", () => {
  expect(solution(3)).toBe("수박수");
  expect(solution(4)).toBe("수박수박");
});
