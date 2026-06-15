// bfs방식을 사용한다.
const solution = (s) => {
  let rows = s.length; // 행의 갯수
  let cols = s[0].length; // 열의 갯수

  // 방향
  let dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function bfs() {
    const queue = [[0, 0, 1]]; // 행, 열, 이동거리
    s[0][0] = 0; // 이동한 거리는 막기

    while (queue.length > 0) {
      const [x, y, answer] = queue.shift();

      if (x === rows - 1 && y === cols - 1) {
        return answer;
      }

      for (const [dr, dc] of dir) {
        const newRow = x + dr;
        const newCol = y + dc;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          s[newRow][newCol] == 1
        ) {
          queue.push([newRow, newCol, answer + 1]);
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
