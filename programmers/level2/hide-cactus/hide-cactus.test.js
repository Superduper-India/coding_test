function solution(m, n, h, w, drops) {
  // mxn크기의 좌표를 그리고,
  // 비가오는 좌표의 순서를 숫자로 기록한다.
  // 그리고 hxw크기의 위치를 탐색할때 좌표의 순서 최댓값이 오는 자리로 골라본다.

  const ground = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));

  drops.forEach(([row, col], idx) => {
    ground[row][col] = idx + 1;
  });

  // 상하좌우
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  console.log(ground);

  // 0이거나 최댓값인 곳을 탐색
  function bfs() {
    const queue = [[0, 0]];

    while (queue.length) {
      const [row, col] = queue.shift();
      let greatest = ground[row][col];
      // 상하좌우 탐색
      for (let i = 0; i < dir.length; i++) {
        const [dirRow, dirCol] = dir[i];
        const newRow = row + dirRow;
        const newCol = col + dirCol;

        if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) {
          console.log(ground[newRow][newCol]);
          // 현재좌표 기준으로 이동했을때 최대값 구하기
          if (ground[newRow][newCol] > greatest) {
            greatest = ground[newRow][newCol];
          }
        }
      }

      console.log(greatest);
    }
  }

  bfs();
}

test('run', () => {
  // expect(
  //   solution(4, 5, 2, 2, [
  //     [0, 0],
  //     [3, 1],
  //     [1, 3],
  //     [2, 4],
  //     [1, 1],
  //     [2, 2],
  //     [2, 3],
  //     [0, 4],
  //   ]),
  // ).toBe([2, 2]);
  expect(
    solution(3, 3, 1, 1, [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
    ]),
  ).toBe([1, 1]);
});
