// 1. 원하는 것
// 사람의 수 n과, 자연수 k가 주어질 때, 사람을 나열 하는 방법을 사전 순으로 나열 했을 때, k번째 방법을 return하는 solution 함수를 완성

// 2. 조건
// - 사람을 나열 하는 방법을 사전 순(오름차순)으로 나열했을 때

// n은 20이하의 자연수 입니다.
// => n이 20이기만 해도, 경우의 수가 2432902008176640000. 단순히 순열로는 답을 수할 수 없다.
// k는 n!이하의 자연수 입니다.

// 순열을 구해야 한다. n!
// n이 3일때 3*2*1 = 6...

const getFactorials = (targetNum) => {
  let result = 0;
  for (let i = targetNum; i > 0; i--) {
    result = result ? result * i : i;
  }
  return result;
};

const solution = (n, k) => {
  const answer = [];
  const numsList = Array.from({ length: n }, (_, i) => i + 1);
  if (k === 1) return numsList;

  let targetIdx = k - 1; //k를 인덱스로 초기화

  while (numsList.length) {
    const cycles = getFactorials(n - 1); // 맨앞자리가 바뀌는 주기 구하기

    // [1,2,3]에 대해서
    // [1, ...] 0
    // [1, ...] 1
    // [2, ...] 2
    // [2, ...] 3
    // [3, ...] 4
    // [3, ...] 5
    // targetIdx 4, cycles 2일때...

    // ??? targetIdx를 cycles로 나누어 그 자리에 올 숫자가 배열에서 몇번째에 있는지 계산
    const index = Math.floor(targetIdx / cycles); // 맨앞자리에 해당하는 숫자의 인덱스 구하기

    // ???
    targetIdx = targetIdx % cycles; // 다음 인덱스 업데이트하기
    console.log('targetIdx:: ', targetIdx);
    answer.push(numsList[index]); // 정답에 첫번째 숫자를 푸쉬
    numsList.splice(index, 1); // 나머지 숫자들을 업데이트
  }

  return answer;
};

test('run', () => {
  expect(solution(3, 5)).toStrictEqual([3, 1, 2]);
});
