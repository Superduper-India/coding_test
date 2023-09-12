// 원하는 것
// - 원형 수열의 모든 원소 elements가 순서대로 주어질 때, 원형 수열의 연속 부분 수열 합으로 만들 수 있는 수의 개수를 return 하도록 solution 함수를 완성

// 조건
// - 원형 수열이란 일반적인 수열에서 처음과 끝이 연결된 형태의 수열이다.

// 계획
// - 길이가 1: 0 / 1 / 2 / 3 / 4
// - 길이가 2: 0,1 / 1,2 / 2,3 / 3,4 / 4,0
// - 길이가 3: 0,1,2 / 1,2,3 / 2,3,4 / 3,4,0 / 4,0,1

// 길이가 n인 연속 수열의 합을 구하는 로직
const sumSequence = (arr) => {
  let sum = 0;

  arr.forEach((number) => {
    sum = sum + number;
  });

  return sum;
};

const solution = (elements) => {
  const answer = [];

  // 1. elements를 최대 5배로 늘린 재료 어레이.
  const temp = Array(elements.length).fill(elements).flat();

  for (let i = 1; i <= elements.length; i++) {
    elements.forEach((_, j) => {
      answer.push(sumSequence(temp.slice(j, j + i)));
    });
  }
  // console.log('===절취선===');
  // console.log(elements.slice(0, 1)); // +1만큼
  // console.log(elements.slice(1, 2));
  // console.log(elements.slice(2, 3));
  // console.log(elements.slice(3, 4));
  // console.log(elements.slice(4, 5));

  // console.log(elements.slice(0, 2)); // +2만큼
  // console.log(elements.slice(1, 3));
  // console.log(elements.slice(2, 4));
  // console.log(elements.slice(3, 5));
  // console.log(elements.slice(4, 6));

  return answer.filter((n, i, arr) => arr.indexOf(n) === i).length;
};

test('run', () => {
  expect(solution([7, 9, 1, 1, 4])).toBe(18);
});
