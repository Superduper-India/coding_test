// 원하는 것
// 조건
// 자연수 n에 대해 n의 다음 큰 숫자는 다음과 같이 정의한다.
// 1. n의 다음 큰 숫자는 n보다 큰 자연수이다.
// 2. n의 다음 큰 숫자와 n은 2진수로 변환했을때 1의 갯수가 같다.
// 3. n의 다음 큰 숫자는 조건 1,2를 만족하는 수 중 가장 작은 수이다.

// n과 nextNumber의 2진수로 변환시 1의 개수를 비교하여 true or false리턴
const checkCountOfOne = (n, nextNumber) => {
  // 각각 2진수로 변환
  const hexOfN = n.toString(2);
  const hexOfNextNumber = nextNumber.toString(2);

  const target1 = [...hexOfN].filter((n) => n == 1).length;
  const target2 = [...hexOfNextNumber].filter((n) => n == 1).length;

  return target1 === target2;
};

const solution = (n) => {
  // n의 다음 큰 숫자는 n보다 크다.
  let nextNumber = n + 1;

  while (!checkCountOfOne(n, nextNumber)) {
    nextNumber++;
  }

  return nextNumber;
};

test('run', () => {
  expect(solution(78)).toBe(83);
  expect(solution(15)).toBe(23);
});
