// 첫글자가 숫자인지 판단해서 문자인 경우엔 대문자로 바꾸어준다.
const makeToUpperCase = (targetChar) => {
  const stringToNumber = targetChar.charCodeAt();
  const firstCaseIsNumber = 49 <= stringToNumber && stringToNumber < 58;

  return firstCaseIsNumber ? targetChar : targetChar.toUpperCase();
};

function solution(s) {
  let answer = '';

  // index가 0이거나 숫자가 첫 문자로 나오는 경우,
  for (let i = 0; i < s.length; i++) {
    // i가 0일때만 문자열을 만들어준다.
    if (i === 0 || s[i - 1] === ' ') {
      // 첫번째 글자일때
      answer = answer + (i === 0 ? makeToUpperCase(s[i]) : s[i].toUpperCase());
    } else answer = answer + s[i].toLowerCase();
  }

  return answer;
}

test('run', () => {
  expect(solution('3people unFollowed me')).toBe('3people Unfollowed Me');
  expect(solution('for the last week')).toBe('For The Last Week');
});
