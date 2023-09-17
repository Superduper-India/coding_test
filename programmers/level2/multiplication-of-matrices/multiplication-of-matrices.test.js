// 원하는 것
// 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성

// 조건
// 행렬의 곱셈을 하려면 1행렬의 열 개수와 2행렬의 행 개수가 동일해야한다.
// 왜냐하면 반환값의 [0,0]에서 앞의 값은 1행렬의 0행 전부, 뒤의 값은 2행렬의 0열 전부를 곱한 후 더한 값과 같기 때문이다.

const solution = (arr1, arr2) => {
  let x = arr1[0].length > arr2[0].length ? arr1[0].length : arr2[0].length; // 열개수
  let y = arr1.length > arr2.length ? arr1.length : arr2.length; // 행개수

  const answer = Array.from({ length: y }).fill(Array.from({ length: x }).fill(0));

  // 행
  for (let row = 0; row < answer.length; row++) {
    // 열
    for (let column = 0; column < answer[0].length; column++) {
      let temp = 0;
      for (let innerRow = 0; innerRow < answer[0].length; innerRow++) {
        temp += arr1[row][innerRow] * arr2[innerRow][column];
        // console.log('row', row, 'column', column, 'innerRow', innerRow);
      }
      answer[row][column] = temp;
    }
  }

  // console.log('answer:', answer);
  return answer;
};

test('run', () => {
  expect(
    solution(
      [
        [1, 4],
        [3, 2],
        [4, 1],
      ],
      [
        [3, 3],
        [3, 3],
      ]
    )
  ).toStrictEqual([
    [15, 15],
    [15, 15],
    [15, 15],
  ]);
  expect(
    solution(
      [
        [2, 3, 2],
        [4, 2, 4],
        [3, 1, 4],
      ],
      [
        [5, 4, 3],
        [2, 4, 1],
        [3, 1, 1],
      ]
    )
  ).toStrictEqual([
    [22, 22, 11],
    [36, 28, 18],
    [29, 20, 14],
  ]);
});
