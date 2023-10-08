// 원하는 것
// 자연수 x, y, n이 매개변수로 주어질 때, x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return하도록 solution 함수를 완성, 이때 x를 y로 만들 수 없다면 -1을 return

// 조건
// 사용할 수 있는 연산은 다음과 같다.
// x에 n을 더합니다.
// x에 2를 곱합니다.
// x에 3을 곱합니다.

const solution = (x, y, n) => {
  let temp = y;
  let answer = 0;

  if (y - n == x || (!(temp % 2) && temp / 2 == x) || (!(temp % 3) && temp / 3 == x)) {
    return 1;
  } else {
    while (true) {
      if (temp == x) break;
      // temp가 x와 같아질 때까지 반복문을 진행한다.
      if (!(temp % 2)) {
        if (temp / 2 < temp - n) temp = temp / 2;
        else temp = temp - n;
        answer++;
      } else if (!(temp % 3)) {
        if (temp / 3 < temp - n) temp = temp / 3;
        else temp = temp - n;
        answer++;
      } else return -1;
    }

    return answer;
  }
};

test('run', () => {
  expect(solution(10, 40, 5)).toBe(2);
  expect(solution(10, 40, 30)).toBe(1);
  expect(solution(2, 5, 4)).toBe(-1);
});
