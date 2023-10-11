// 원하는 것
//수열을 나타내는 정수 배열 sequence와 부분 수열의 합을 나타내는 정수 k가 매개변수로 주어질 때, 위 조건을 만족하는 부분 수열의 시작 인덱스와 마지막 인덱스를 배열에 담아 return 하는 solution 함수를 완성

// 조건
// 기존 수열에서 임의의 두 인덱스의 원소와 그 사이의 원소를 모두 포함하는 부분 수열
// 부분 수열의 합은 k
// 합이 k인 부분 수열이 여러 개인 경우 길이가 짧은 수열을 찾기
// 길이가 짧은 수열이 여러 개인 경우 앞쪽(시작 인덱스가 작은)에 나오는 수열을 찾기

// 실패 => 시간 초과
const solution = (sequence, k) => {
  const answer = [];
  let i = 0;
  let min = 0;

  while (i < sequence.length) {
    const map = new Map();
    let calc = 0;

    // 부분 수열의 합이 k를 만족하는 경우의 수를 모두 찾는다.
    for (let j = i; j < sequence.length; j++) {
      map.set(j, sequence[j]);
      calc = calc + sequence[j];

      if (calc === k) {
        if (!min || min > [...map].length) {
          // 최소값이 0이거나 현재맵의 길이보다 클때, 현재 맵의 길이 할당
          min = [...map].length;
          answer[0] = [...map][0][0];
          answer[1] = [...map][[...map].length - 1][0];
        } else {
          // 길이가 짧은 수열이 여러 개인 경우 앞쪽(시작 인덱스가 작은)에 나오는 수열을 찾기
          // console.log(answer, [...map], [...map][0][0]);
        }
      }
    }
    i++;
  }

  return answer;
};

test('run', () => {
  expect(solution([1, 2, 3, 4, 5], 7)).toStrictEqual([2, 3]);
  expect(solution([1, 1, 1, 2, 3, 4, 5], 5)).toStrictEqual([6, 6]);
  expect(solution([2, 2, 2, 2, 2], 6)).toStrictEqual([0, 2]);
});
