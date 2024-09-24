// 1. 원하는 것
// 사람의 수 n과, 자연수 k가 주어질 때, 사람을 나열 하는 방법을 사전 순으로 나열 했을 때, k번째 방법을 return하는 solution 함수를 완성

// 2. 조건
// - n은 20이하의 자연수이다.
// - k는 n! 이하의 자연수이다.

// 경우의 수 중, 순열에 관련된 문제 같다.
// 순열: 서로 다른 n개의 원소 중에서 r개를 중복 없이 골라 순서에 상관있게 나열하는 경우의 수 (nPr)
// 순열의 공식: n! = n * (n-1) * (n-2) * ... * 1

// 2! = 2 * 1 = 2가지 => 이것이 앞자리 숫자의 교체 주기

const getFactorial = (number) => {
  let result = 1;
  // n! = n * (n-1) * (n-2) * ... * 1 를 리턴하는 함수
  for (let i = 2; i <= number; i++) result = result * i;
  return result;
};

const solution = (n, k) => {
  const answer = [];
  const arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  // n이 20이기만 해도 경우의 수가 2432902008176640000가지므로 모든 경우의 수를 찾는 것은 비효율 적이다.
  let targetIndex = k - 1; // 실제로는 인덱스 위치이므로 초기화 해줌

  while (arr.length) {
    // k가 1인 경우, 현재 배열을 그대로 리턴하면 된다.
    if (targetIndex === 0) {
      answer.push(...arr);
      break;
    }
    // 주의!! arr.length는 반복문때 업데이트 되는데 n은 업데이트 안되므로, arr.length을 사용해야한다.
    const factorial = getFactorial(n - 1); // 앞자리수 교체 주기 횟수

    const index = Math.floor(targetIndex / factorial); // k번째에 해당하는 arr의 인덱스를 찾기
    targetIndex = targetIndex % factorial; // 다음에 찾아야할 k번째 인덱스 업데이트 (???)
    answer.push(arr[index]); // arr의 k번째 인덱스 푸쉬
    arr.splice(index, 1); // k번째 찾았으므로 요소 제거
  }

  return answer;
};

test('run', () => {
  expect(solution(3, 5)).toStrictEqual([3, 1, 2]);
});
