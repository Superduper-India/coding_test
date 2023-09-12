// 원하는 것
// - 원형 수열의 모든 원소 elements가 순서대로 주어질 때, 원형 수열의 연속 부분 수열 합으로 만들 수 있는 수의 개수를 return 하도록 solution 함수를 완성

// 조건
// - 원형 수열이란 일반적인 수열에서 처음과 끝이 연결된 형태의 수열이다.

// 계획
// - 길이가 1: 0 / 1 / 2 / 3 / 4
// - 길이가 2: 0,1 / 1,2 / 2,3 / 3,4 / 4,0
// - 길이가 3: 0,1,2 / 1,2,3 / 2,3,4 / 3,4,0 / 4,0,1
// 실패 => 시간 초과
// 슬라이딩 윈도우 알고리즘 활용. 기존 알고리즘이 O(NW)의 복잡도를 가진다면, 슬라이딩 윈도우 알고리즘은 O(N)의 시간 복잡도를 가진다.
// 현재의 숫자에서 지나간 숫자는 빼주고, 들어온 숫자는 더해준다.

// 길이가 n인 연속 수열의 합을 구하는 로직
const sumSequence = (arr) => {
  let sum = 0;

  arr.forEach((number) => {
    sum = sum + number;
  });

  return sum;
};

const solution = (elements) => {
  const set = new Set();

  for (let i = 1; i <= elements.length; i++) {
    // n길이의 최초의 윈도우에 대한 합을 구해주는 로직
    let sumSeq = sumSequence(elements.slice(0, i));

    elements.forEach((_, j) => {
      if (j === 0) {
        // 최초의 윈도우만 아묻따 추가해준다.
        set.add(sumSeq);
      } else {
        // 이후의 윈도우에서는 이전에 구한 합을 활용한다.
        sumSeq = sumSeq - elements[j - 1];
        // toDo 아래 인덱스 직접 계산해보기
        // j => 1,2,3,4 반복
        // console.log('j', j);
        // i => 1,1,1,1 => 2,2,2,2 ...
        // console.log('i', i);
        // elements.length => 5
        // console.log('(j + i - 1) % elements.length', (j + i - 1) % elements.length);
        sumSeq = sumSeq + elements[(j + i - 1) % elements.length];
      }
      set.add(sumSeq);
    });
  }

  return [...set].length;
};

test('run', () => {
  expect(solution([7, 9, 1, 1, 4])).toBe(18);
});
