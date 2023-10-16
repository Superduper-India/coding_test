// 원하는 것
// 정수 배열 numbers가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록 solution 함수를 완성해주세요. 단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.

// 조건
// 큰 수의 조건은 다음과 같다.
// 현재 인덱스보다 크고, 현재 요소보다 크면서 인덱스의 차가 가장 작은 수

const solution = (numbers) => {
  // 값이 정해지지 않은 것을 고려, 요소가 모두 -1인 배열 answer
  const answer = new Array(numbers.length).fill(-1);

  // 아직 값이 정해지지 않은 인덱스를 담아낼 targetIdxs
  const targetIdxs = [];

  // 반복문으로 numbers의 요소를 순회하면서
  // 마지막에는 i인덱스를 스택에 푸쉬
  for (let i = 0; i < numbers.length; i++) {
    // console.log('targetIdxs:', targetIdxs);

    // 인덱스가 있고, 현재 요소가 비교 인덱스의 요소보다 크다면,
    while (targetIdxs.length && numbers[targetIdxs[targetIdxs.length - 1]] < numbers[i]) {
      // console.log('타겟 인덱스의 요소:', numbers[targetIdxs[targetIdxs.length - 1]], '현재 요소:', numbers[i]);
      // 정답 배열의 비교 인덱스의 요소는 현재 요소이다
      answer[targetIdxs.pop()] = numbers[i];
      // console.log('answer:', answer);
    }

    // 비교 인덱스를 넣어준다
    targetIdxs.push(i);
  }

  return answer;
};

test('run', () => {
  expect(solution([2, 3, 3, 5])).toStrictEqual([3, 5, 5, -1]);
  expect(solution([9, 1, 5, 3, 6, 2])).toStrictEqual([-1, 5, 6, 6, -1, -1]);
});
