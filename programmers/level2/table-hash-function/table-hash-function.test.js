function solution(data, col, row_begin, row_end) {
  data.sort((a, b) => {
    const aCol = a[col - 1];
    const bCol = b[col - 1];
    if (aCol === bCol) return b[0] - a[0];
    else return aCol - bCol;
  });

  function getSumBalance(row) {
    const rowIndex = row - 1;
    let sum = 0;

    data[rowIndex].forEach((number) => {
      sum = sum + (number % row);
    });

    return sum;
  }

  const rowBeginResult = getSumBalance(row_begin);
  const rowEndResult = getSumBalance(row_end);

  return rowBeginResult + rowEndResult;
}

test('run', () => {
  expect(
    solution(
      [
        [2, 2, 6],
        [1, 5, 10],
        [4, 2, 9],
        [3, 8, 3],
      ],
      2,
      2,
      3,
    ),
  ).toBe(4);
});
