const solution = (s) => {
  const stringArr = s.toLowerCase().split(" ");
  return stringArr
    .map((string) => {
      const firstLetter = string[0];
      if (!isNaN(+firstLetter)) {
        console.log("지금 첫글자 숫자임");
        return string;
      } else {
        console.log("지금 첫글자 문자임");
        // 문자열 첫글자만 대문자로 바꾸는 로직
        return string.replace(/\b[a-z]/, (letter) => letter.toUpperCase());
      }
    })
    .join(" ");
};

test("run", () => {
  expect(solution("3people unFollowed me")).toBe("3people Unfollowed Me");
  expect(solution("for the last week")).toBe("For The Last Week");
});
