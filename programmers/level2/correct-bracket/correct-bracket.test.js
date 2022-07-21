function solution(s) {
  const bracketArr = [...s];
  let openBracket = 0; // 열림 닫힘 괄호 쌍 체크용
  let answer = true;

  //첫 번째 문자는 열림 괄호여야 함
  if (bracketArr[0] != "(") answer = false;

  bracketArr.map(bracket => {
    if (bracket == "(") {
      openBracket++;
    } else if (openBracket >= 1 && bracket == ")") {
      openBracket--;
    }
  });

  if (openBracket == 0) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}

test("run", () => {
  expect(solution("()()")).toBe(true);
  expect(solution("(())()")).toBe(true);
  expect(solution(")()(")).toBe(false);
  expect(solution("(()(")).toBe(false);
});
