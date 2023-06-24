function solution(board) {
  let result;
  let oCount = 0;
  let xCount = 0;
  let dd = 0;

  // 같은i(row)가 모두 "O"이거나 "X"면 0을 리턴
  // 모든 i(행), j(열)을 탐색했을때 "O", "X"의 개수가 홀수면 0을 리턴
  // 모든 i(행), j(열)을 탐색했을때 "O", "X"의 개수가 짝수면 1을 리턴
  board.forEach((row) => {
    if (!row.includes('.')) {
      dd += 1;
    }
    [...row].forEach((column) => {
      if (column === 'O') oCount += 1;
      if (column === 'X') xCount += 1;
    });
  });

  if (dd == 2 || oCount !== xCount) {
    result = 0;
  } else result = 1;

  return result;
}

test('run', () => {
  expect(solution(['O.X', '.O.', '..X'])).toBe(1);
  expect(solution(['OOO', '...', 'XXX'])).toBe(0);
  expect(solution(['...', '.X.', '...'])).toBe(0);
  expect(solution(['...', '...', '...'])).toBe(1);
});
