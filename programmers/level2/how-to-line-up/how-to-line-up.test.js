// 1. 원하는 것
// 사람의 수 n과, 자연수 k가 주어질 때, 사람을 나열 하는 방법을 사전 순으로 나열 했을 때, k번째 방법을 return하는 solution 함수를 완성

// 2. 조건
// - n은 20이하의 자연수이다.
// - k는 n! 이하의 자연수이다.

// 경우의 수 중, 순열에 관련된 문제 같다.
// 순열: 서로 다른 n개의 원소 중에서 r개를 중복 없이 골라 순서에 상관있게 나열하는 경우의 수 (nPr)
// 순열의 공식: n! = n * (n-1) * (n-2) * ... * 1
// [1,2,3]의 모든 순열을 구하려면 3! = 3 * 2 * 1 = 6가지

const factorial = (n) => {
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
};

// 2! = 2 * 1 = 2가지 => 이것이 앞자리 숫자의 교체 주기
// arr[인덱스 / factorial(n-1)] 현재 인덱스 배열의 맨 앞자리 수
const solution = (n, k) => {
  const answer = [];

  const arr = new Array(n).fill(1);
  for (let i = 1; i < n; i++) arr[i] = arr[i - 1] + 1;

  let nth = k - 1; // 인덱스와 일치를 위해 k-1로 초기화한다.

  // toDo 여기서부터 이해 안감.
  while (arr.length) {
    if (nth === 0) {
      answer.push(...arr);
      break;
    }
    const fact = factorial(arr.length - 1); // 맨 앞자리수 교체 주기
    const index = (nth / fact) >> 0; // nth번째의 맨 앞자리수 ???
    nth = nth % fact;

    answer.push(arr[index]);
    arr.splice(index, 1); // 배열에서 index요소 1개를 제거
  }

  return answer;
};

test('run', () => {
  expect(solution(3, 5)).toStrictEqual([3, 1, 2]);
});
