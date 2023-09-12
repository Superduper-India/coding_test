// 원하는 것
// n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성

// 조건
// - n개의 수의 최소공배수란 입력된 n개의 수들의 배수 중 공통이 되는 가장 작은 숫자를 의미한다

// 계획
// [1,2,3]이 있을때, 1을 2로 나누어 떨어지지 않는다. 하지만 2를 곱하면 나누어 떨어진다. 다음으로 넘어간다. 2를 3으로 나누어 떨어지지 않는다. ... 3을 곱하면 나누어 떨어진다 업데이트 해준다.

const solution = (arr) => {
  let n = 1;
  let flag = false;

  // flag가 false면 계속하기
  while (!flag) {
    // 숫자를 증가시킨다
    n++;
    for (let i = 0; i < arr.length; i++) {
      // 모든 숫자가 0으로 나누어 떨어지면 큰 반복문 탈출
      if (n % arr[i] === 0) flag = true;
      else {
        // 모든 숫자 중에 하나라도 0으로 나누어 떨어지지 않으면 작은 반복문 탈출
        // n증가시키고 큰 반복문 계속
        flag = false;
        break;
      }
    }
  }

  return n;
};

test('run', () => {
  expect(solution([2, 6, 8, 14])).toBe(168);
  expect(solution([1, 2, 3])).toBe(6);
});
