// 1. 원하는 것
// 표에서 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return 하는 solution 함수를 완성

// 2. 조건
// 표 1칸은 1x1의 정사각형으로 이루어져 있다.
// 표의 값은 1또는 0으로만 이루어져 있다.
// 표는 2차원 배열로 주어진다.

// 만약 행 또는 열이 1이면 정사각형의 넓이는 1이다.
// 루프를 돌며 자신의 위치(현재 인덱스)의 값이 1이상일 경우 왼쪽상단(↖︎), 위쪽(↑), 왼쪽(←)의 최솟값을 구한 후 자신의 위치에 최솟값 + 1을 할당한다.
// 2번의 값의 최댓값을 answer에 할당해주고, 정사각형의 넓이를 구한다.(최댓값의 제곱 === 정사각형의 넓이)
const solution = (board) => {
  let answer = 0;
  let row = board.length;
  let col = board[0].length;

  // 행 또는 열이 1이면 정사각형의 넓이를 1으로 반환
  if (row < 2 || col < 2) return 1;

  for (let x = 1; x < row; x++) {
    for (let y = 1; y < col; y++) {
      // 자신의 위치(현재 인덱스)의 값이 1이상일 경우
      if (board[x][y] !== 0) {
        const topLeft = board[x - 1][y - 1];
        const left = board[x][y - 1];
        const top = board[x - 1][y];
        const min = Math.min(topLeft, left, top); // 왼쪽상단, 위쪽, 왼쪽 중 최솟값
        board[x][y] = min + 1;
      }

      if (answer < board[x][y]) answer = board[x][y];
    }
  }

  return answer * answer;
};

test('run', () => {
  expect(
    solution([
      [0, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 0, 1, 0],
    ])
  ).toBe(9);
  expect(
    solution([
      [0, 0, 1, 1],
      [1, 1, 1, 1],
    ])
  ).toBe(4);
});
