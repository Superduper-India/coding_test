// 원하는 것
// (이진 변환의 횟수)와 (변환 과정에서 제거된 모든 0의 개수)를 각각 배열에 담아 return 하도록 solution 함수를 완성

// 조건
// 이진 변환은 x의 모든 0을 제거한다. 그리고 x의 길이를 2진법으로 표현한 문자열.
// s가 "1"이 될 때까지 계속해서 s에 이진 변환

// 문자열의 0을 세는 함수
const countZero = (string) => {
  return [...string].filter((s) => s === '0').length;
};

// 문자열의 0을 제거하는 함수
const removeZero = (string) => {
  return [...string].filter((s) => s !== '0').join('');
};

const solution = (s) => {
  let count = 0;
  let zero = 0;

  while (s !== '1') {
    // 0을 센뒤에 0을 제거
    zero = zero + countZero(s);
    s = removeZero(s);
    s = s.length.toString(2);
    count++;
  }

  return [count, zero];
};

test('run', () => {
  expect(solution('110010101001')).toBe([3, 8]);
  expect(solution('01110')).toBe([3, 3]);
  expect(solution('1111111')).toBe([4, 1]);
});
