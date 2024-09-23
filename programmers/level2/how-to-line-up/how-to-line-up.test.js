// 1. 원하는 것
// 사람의 수 n과, 자연수 k가 주어질 때, 사람을 나열 하는 방법을 사전 순으로 나열 했을 때, k번째 방법을 return하는 solution 함수를 완성

// 2. 조건
// - n은 20이하의 자연수이다.
// - k는 n! 이하의 자연수이다.

// 경우의 수 중, 순열에 관련된 문제 같다.
// 순열: 서로 다른 n개의 원소 중에서 r개를 중복 없이 골라 순서에 상관있게 나열하는 경우의 수 (nPr)
// 순열의 공식: n! = n * (n-1) * (n-2) * ... * 1
// [1,2,3]의 모든 순열을 구하려면 3! = 3 * 2 * 1 = 6 가지

const getPermutations = (list = [1, 2, 3]) => {
  if (list.length === 0) return [[]];

  const result = [];
  list.forEach((ele, idx) => {
    // idx를 제외하고 나머지 숫자의 배열을 만듦
    const rest = list.slice(0, idx).concat(list.slice(idx + 1));
    // toDo 여기서부터 이해가 필요
    const restPermutations = getPermutations(rest);
    restPermutations.forEach((permutation) => {
      result.push([ele, ...permutation]);
    });
  });

  return result;
};

const solution = (n, k) => {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  if (k === 1) return arr; // 1번째 경우의 수라면, 순열 안구해도 된다.
  return getPermutations(arr)[k - 1];
};

test('run', () => {
  expect(solution(3, 5)).toStrictEqual([3, 1, 2]);
});
