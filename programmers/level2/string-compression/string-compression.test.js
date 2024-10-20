// 1. 원하는 것
// 압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수를 완성

// 2. 조건
// 문자가 반복되지 않아 한번만 나타난 경우 1은 생략함
// n개 단위로 자르고, 마지막에 남은 문자열은 그대로 붙여준다.

const solution = (s) => {
  const answer = [s];
  const array = Array.from({ length: s.length / 2 }).map((_, idx) => idx + 1);

  // console.log(answer);

  for (let i = 0; i < array.length; i++) {
    const test = [];
    let currStrLength = array[i];
    let n = 0;
    let currIdx = 0;

    while (n * currStrLength < s.length) {
      currIdx = n * currStrLength;
      n++;
      test.push(s.substr(currIdx, currStrLength));
    }

    let count = 0;
    let str = '';
    test.forEach((item, idx) => {
      if (test[idx + 1] && item === test[idx + 1]) {
        count = !count ? count + 2 : count + 1;
      } else {
        str = !count ? str + item : str + count + item;
        count = 0;
      }
    });
  }
};

test('run', () => {
  expect(solution('aabbaccc')).toBe(7);
  // expect(solution('ababcdcdababcdcd')).toBe(9);
  // expect(solution('abcabcdede')).toBe(8);
  // expect(solution('abcabcabcabcdededededede')).toBe(14);
  // expect(solution('xababcdcdababcdcd')).toBe(17);
});
