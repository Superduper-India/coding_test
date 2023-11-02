// 원하는 것
// 자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성

// 조건
// 124 나라에는 자연수만 존재합니다.
// 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.

// 계획
// 1  2  3*  4  5  6*  7  8  9*  10 11 12*
// 01 02 04* 11 12 14* 21 22 24* 41 42 44*

const solution = (n) => {
  let answer = '';
  // n=1 => n%3=1, n=2 => n%3=2, n=3 => n%3=0
  const nums = [4, 1, 2];

  // n=4 => n=1, n%3=1
  // n=5 => n=1, n%3=1
  // n=7 => n=2, n%3=2
  // n=10 => n=3, n%3=0

  while (n) {
    answer = nums[n % 3] + answer;
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }

  return answer;
};

test('run', () => {
  expect(solution(1)).toBe('1');
  expect(solution(2)).toBe('2');
  expect(solution(3)).toBe('4');
  expect(solution(4)).toBe('11');
  expect(solution(5)).toBe('12');
  expect(solution(6)).toBe('14');
  expect(solution(7)).toBe('21');
  expect(solution(9)).toBe('24');
  expect(solution(10)).toBe('41');
  expect(solution(12)).toBe('44');
});
