// 1. 원하는 것
// 사람의 수 n과, 자연수 k가 주어질 때, 사람을 나열 하는 방법을 사전 순으로 나열 했을 때, k번째 방법을 return하는 solution 함수를 완성

// 2. 조건

const getCombonations = (arr, fixedNum) => {
  const result = [];
  if (fixedNum === 1) return arr.map((num) => [num]);

  arr.forEach((fixedNum, index, arr) => {
    // num을 제외한 나머지 뒤
    const rest = arr.slice(index + 1);
    const combinations = getCombonations(rest, fixedNum - 1);
    const attched = combinations.map((num) => [fixedNum, ...num]);
    result.push(...attched);
  });

  return result;
};

const solution = (n, k) => {
  const arr = [];
  const answer = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  arr.forEach((num) => {
    console.log(getCombonations(arr, num));
  });
};

test('run', () => {
  expect(solution(3, 5)).toBe([3, 1, 2]);
});
