function changeWord(word) {
  let newWord = "";

  for (let i = 0; i < word.length; i++) {
    i % 2 ? newWord += word[i].toLowerCase()
      : newWord += word[i].toUpperCase();
  }

  return newWord;
}

function solution(str) {
  const strArr = str.split(" ");

  return strArr.map(word => {
    return changeWord(word);
  }).join(" ");
}

test("run", () => {
  expect(solution("try hello world")).toBe("TrY HeLlO WoRlD");
});
