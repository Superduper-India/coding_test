const solution = (s) => {
  const rows = s.length; // 가로줄
  const cols = s[0].length; // 세로줄
  // 상하좌우
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function bfs() {
    const queue = [[0, 0, 1]]; // 행, 열, 이동거리
    s[0][0] = 0; // 이동한 거리 0으로 막기

    while (queue.length > 0) {
      const [row, col, distance] = queue.shift();

      // 적 팀 진영 도착시 거리값 리턴
      if (row === rows - 1 && col === cols - 1) {
        return distance;
      }

      // 상하좌우 이동
      for (const [r, c] of dir) {
        const newRow = row + r;
        const newCol = col + c;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          s[newRow][newCol] === 1
        ) {
          queue.push([newRow, newCol, distance + 1]);
          s[newRow][newCol] = 0;
        }
      }
    }
    return -1;
  }

  return bfs();
};

test('run', () => {
  expect(
    solution([
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 0, 1],
    ]),
  ).toBe(11);
  expect(
    solution([
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1],
    ]),
  ).toBe(-1);
});
