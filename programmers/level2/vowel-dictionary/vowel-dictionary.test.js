function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  const dict = [];

  const getDict = (currentVowel, length) => {
    if (length === 6) return;
    dict.push(currentVowel);

    for (const nextVowel of vowels) {
      getDict(currentVowel + nextVowel, length + 1);
    }
  };

  vowels.forEach(vowel => {
    getDict(vowel, 1);
  });

  return dict.indexOf(word) + 1;
}

test("solution", () => {
  expect(solution("AAAAA")).toBe(5);
  expect(solution("AAAAE")).toBe(6);
  expect(solution("AAAE")).toBe(10);
  expect(solution("I")).toBe(1563);
  expect(solution("EIO")).toBe(1189);
});
