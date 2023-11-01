// 원하는 것
// 자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성

// 조건
// 124 나라에는 자연수만 존재합니다.
// 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.

// 계획

const solution = (n) => {
  const nums = [1, 2, 4];
  let currIndex = 0;
  let answer = 0;

  for (let i = 0; i < n; i++) {
    let temp = 0;
    temp = nums[currIndex];
    console.log(temp);
    // 0 1 2 반복
    currIndex = (currIndex + 1) % 3;
  }

  // 1  2  3  4  5  6  7  8  9  10 11 12 13  14  15  16  17  18  19
  // 01 02 04 11 12 14 21 22 24 41 42 44 111 112 114 121 122 124 141 ...
  // 1자리 수는 1번마다 반복, 2자리수는 3번째 마다 반복, 3자리 수는 12번째 마다 반복..?

  return answer;
};

test('run', () => {
  // expect(solution(1)).toBe(1);
  // expect(solution(2)).toBe(2);
  // expect(solution(3)).toBe(4);
  expect(solution(4)).toBe(11);
  // expect(solution(5)).toBe(11);
});
