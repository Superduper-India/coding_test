// 원하는 것
// 지도를 나타내는 문자열 배열 maps가 매개변수로 주어질 때, 각 섬에서 최대 며칠씩 머무를 수 있는지 배열에 오름차순으로 담아 return 하는 solution 함수를 완성해주세요. 만약 지낼 수 있는 무인도가 없다면 -1을 배열에 담아 return

// 조건
// 지도는 1 x 1크기의 사각형들로 이루어진 직사각형 격자 형태, 격자의 각 칸에는 'X'(바다) 또는 1에서 9 사이의 자연수(무인도), 상하좌우로 연결되는 칸의 무인도의 숫자를 모두 합한 값(최대 며칠 머물 수 있는지)

// 계획
// 현재 위치를 큐에 넣어준다. 현재 위치의 숫자를 더해주고, 방문처리를 한다.
// 현재 위치에서 상하좌우를 확인, 제한구간을 넘지않고, 방문한 적이 없으며, X인 땅이 아니라면 방문처리하고 확인한 위치의 숫자를 더해준다.
// 그리고 큐에 확인한 위치를 넣어준다.
// 큐가 비어서 반복이 종료된다면, 지금까지 더해진 수를 결과 배열에 넣어준다.

const solution = (maps) => {
  const result = [];
  const [row, column] = [maps.length, maps[0].length];
  // maps의 행열 길이를 가지는 자료구조
  const visited = Array.from({ length: row }, () => Array(column).fill(0));
  // 현재 위치에서 상하좌우
  const move = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const bfs = (a, b) => {
    let count = 0;
    // 큐에 현재 위치를 넣어준다
    const queue = [[a, b]];
    // 현재 위치의 숫자를 더해준다
    count += parseInt(maps[a][b]);
    // 현재 위치를 방문처리 한다
    visited[a][b] = 1;

    // 큐가 비면 반복문 멈춘다
    while (queue.length) {
      // 큐의 선입선출로 행열 확인
      const [r, c] = queue.shift();
      // console.log('row:', r, 'column:', c);

      // 현재 위치에서 상하좌우를 확인
      for (let i = 0; i < 4; i++) {
        // 상하좌우의 행
        const mr = r + move[i][0];
        // 상하좌우의 열
        const mc = c + move[i][1];
        // console.log('mr:', mr, 'mc:', mc, maps[mr][mc]);

        // 제한구간을 넘지않고, 방문한 적이 없으며, X인 땅이 아니라면 방문처리하고 확인한 위치의 숫자를 더해준다. 그리고 큐에 확인한 위치를 넣어준다
        if (mr >= 0 && mc >= 0 && mr < row && mc < column && !visited[mr][mc] && maps[mr][mc] !== 'X') {
          // console.log('mr:', mr, 'mc:', mc, maps[mr][mc]);

          visited[mr][mc] = 1;
          count += parseInt(maps[mr][mc]);
          // 큐에 확인한 위치를 넣어준다 (???)
          queue.push([mr, mc]);
        }
      }
    }
    result.push(count);
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      // 방문한 적이 없으며, X인 땅이 아니다
      if (!visited[i][j] && maps[i][j] !== 'X') bfs(i, j);
    }
  }

  console.log(result);

  if (result.length === 0) return [-1];
  return result.sort((a, b) => a - b);
};

test('run', () => {
  expect(solution(['X591X', 'X1X5X', 'X231X', '1XXX1'])).toStrictEqual([1, 1, 27]);
  expect(solution(['XXX', 'XXX', 'XXX'])).toStrictEqual([-1]);
});
