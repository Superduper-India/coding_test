// 원하는 것
// 밑변의 길이와 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후, 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return 하도록 solution 함수를 완성

// 조건

// 계획
// 00 => 10 => 20 => 30 => 31 => 32 => 33 => 22 => 11 => 21
// 행의 값만 증가: 00 => 10 => 20 => 30 (4)
// 열의 값만 증가: 31 => 32 => 33 (3)
// 행, 열의 값 감소: 22 => 11 (2)
// 행의 값 증가: 21 (1)

const solution = (n) => {
  const answer = [];

  // 행과 열의 길이가 각각 n인 배열
  const arr = Array.from({ length: n }, () => new Array(n).fill(0));

  const move = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ];
  let moveIndex = 0;
  let row = -1;
  let col = 0;
  let currValue = 1;

  for (let i = n; i > 0; i -= 1) {
    const [moveR, moveC] = move[moveIndex];
    // console.log('moveIndex:', moveIndex, 'i:', i, 'arr:', arr);

    for (let j = 0; j < i; j += 1) {
      row += moveR;
      col += moveC;
      // console.log('j:', j, 'row:', row, 'col:', col);

      arr[row][col] = currValue;
      currValue++;
    }
    // 0,1,2 ... 반복
    moveIndex = (moveIndex + 1) % 3;
  }

  arr.forEach((innerArr) => {
    innerArr.forEach((num) => {
      if (num) answer.push(num);
    });
  });

  return answer;
};

test('run', () => {
  expect(solution(4)).toStrictEqual([1, 2, 9, 3, 10, 8, 4, 5, 6, 7]);
  expect(solution(5)).toStrictEqual([1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9]);
  expect(solution(6)).toStrictEqual([1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11]);
});
