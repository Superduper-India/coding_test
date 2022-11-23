function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0; // a,b가 같을 경우
}

function solution(strings, n) {
  return strings.sort((str1, str2) => {
    return str1[n] === str2[n] ? compare(str1, str2) : compare(str1[n], str2[n]);
  });
}

test("run", () => {
  expect(solution(
    ["sun", "bed", "car"], 1
  )).toStrictEqual(["car", "bed", "sun"]);
  expect(solution(
    ["abce", "abcd", "cdx"], 2
  )).toStrictEqual(["abcd", "abce", "cdx"]);
});
