// 원하는 것
// 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성

// 조건
// 곱할 수 있는 배열만 주어진다.

const solution = (arr1, arr2) => {
  const answer = [];

  // arr1의 열과 arr2의 행의 개수가 일치한다.
  // 즉, arr1의 각 행과 arr2의 각 열의 요소를 각각 곱해서 더해주어야한다.

  arr1.forEach((_, i) => {
    const row = [];
    // console.log(i); // 0,1,2
    arr1[0].forEach((_, j) => {
      let temp = 0;
      // console.log(j); // i: 0 => 0,1, i: 1 => 0,1, i: 2 => 0,1
      arr2.forEach((_, k) => {
        // console.log(k); // j: 0 => 0,1, j: 1 => 0,1
        const arr1Row = arr1[i][k];
        const arr2Column = arr2[k][j];
        temp += arr1Row * arr2Column;
        // console.log('i', i, 'j', j, 'k', k);
      });
      row.push(temp);
    });
    answer.push(row);
  });

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
