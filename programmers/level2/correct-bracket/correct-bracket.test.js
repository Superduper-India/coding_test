function solution(s) {
  const bracket = '()';

  let targetBracket = [];
  let compareBracket = [];

  let answer = false;

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i % s.length];
    if (!targetBracket.includes(currentBracket)) targetBracket.push(currentBracket);
    else compareBracket.push(currentBracket);
  }

  // console.log(targetBracket, compareBracket, 0 % 2, 1 % 2, 2 % 2, 3 % 2);

  targetBracket.forEach((char, i) => {
    if (char === bracket[i % 2]) answer = true;
    else answer = false;
  });

  compareBracket.forEach((char, i) => {
    if (char === bracket[i % 2]) answer = true;
    else answer = false;
  });

  return answer;
}

test('run', () => {
  expect(solution('()()')).toBe(true);
  expect(solution('(())()')).toBe(true);
  expect(solution(')()(')).toBe(false);
  expect(solution('(()(')).toBe(false);
});
