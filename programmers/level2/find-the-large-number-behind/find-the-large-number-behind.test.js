// 원하는 것
// 정수 배열 numbers가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록 solution 함수를 완성해주세요. 단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.

// 조건
// 큰 수의 조건은 다음과 같다.
// 1. 현재 인덱스보다 크고, 현재 요소보다 크면서 인덱스의 차가 가장 작은 수

const solution = (numbers) => {
  const answer = [];
  let i = 0;

  while (i < numbers.length) {
    if (i === numbers.length - 1) {
      answer.push(-1);
    }

    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        // 현재 인덱스보다 크다
        // 현재 요소보다 크다
        // 인덱스의 차가 가장 작다
        answer.push(numbers[j]);
        break;
      } else if (j === numbers.length - 1) {
        // 위 조건을 만족하지 않으면 -1을 담는다
        answer.push(-1);
      }
    }
    i++;
  }

  return answer;
};

test('run', () => {
  expect(solution([2, 3, 3, 5])).toStrictEqual([3, 5, 5, -1]);
  expect(solution([9, 1, 5, 3, 6, 2])).toStrictEqual([-1, 5, 6, 6, -1, -1]);
});
