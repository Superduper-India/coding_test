const solution = (s) => {
  let stringArr = [...s];

  for (let i = 0; i < stringArr.length - 1; i++) {
    // 지금 인덱스와 다음 인덱스의 문자가 일치하면 stringArr에서 해당 인덱스들을 제거한다.
    if (stringArr[i] === stringArr[i + 1]) {
      stringArr.splice(i, 2);
    }
  }

  return stringArr.length === 2 ? 1 : 0;
};

test("run", () => {
  expect(solution("baabaa")).toBe(1);
  expect(solution("cdcd")).toBe(0);
});
