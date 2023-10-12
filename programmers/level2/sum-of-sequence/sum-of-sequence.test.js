// 원하는 것
//수열을 나타내는 정수 배열 sequence와 부분 수열의 합을 나타내는 정수 k가 매개변수로 주어질 때, 위 조건을 만족하는 부분 수열의 시작 인덱스와 마지막 인덱스를 배열에 담아 return 하는 solution 함수를 완성

// 조건
// 기존 수열에서 임의의 두 인덱스의 원소와 그 사이의 원소를 모두 포함하는 부분 수열
// 부분 수열의 합은 k
// 합이 k인 부분 수열이 여러 개인 경우 길이가 짧은 수열을 찾기
// 길이가 짧은 수열이 여러 개인 경우 앞쪽(시작 인덱스가 작은)에 나오는 수열을 찾기

const solution = (sequence, k) => {
  let answer = [];
  // sequence의 누적계
  let accu = 0;
  // 시작 인덱스
  let startI = 0;

  for (let i = 0; i < sequence.length; i++) {
    accu = accu + sequence[i];

    if (accu > k) {
      // sequence의 누적계가 k보다 크면 작아질때까지 이전값을들 빼줌
      // 이렇게되면 i에 대한 값은 누적계에 더해져 있으므로 조건에 맞는 startI값만 알 수 있게된다
      while (accu > k) {
        accu = accu - sequence[startI++];
      }
    }

    // sequence의 누적계가 같다면 답에 푸쉬하기
    if (accu === k) {
      answer.push([startI, i]);
    }
  }

  let result = [];
  let minLen = sequence.length;
  if (answer.length === 1) return answer[0];
  else {
    // 합이 k인 부분 수열이 여러 개인 경우 길이가 짧은 수열을 찾기
    answer.forEach(([startI, endI]) => {
      const currLen = endI - startI;
      if (minLen > currLen) {
        minLen = currLen;
        result = [startI, endI];
      }
    });
    // 길이가 짧은 수열이 여러 개인 경우 앞쪽(시작 인덱스가 작은)에 나오는 수열을 찾기
    // => 순서대로 담기므로 이건 따로 로직을 구성할 필요 없다
  }

  return result;
};

test('run', () => {
  expect(solution([1, 2, 3, 4, 5], 7)).toStrictEqual([2, 3]);
  expect(solution([1, 1, 1, 2, 3, 4, 5], 5)).toStrictEqual([6, 6]);
  expect(solution([2, 2, 2, 2, 2], 6)).toStrictEqual([0, 2]);
});
