// 1. 원하는 것
// 표에서 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return 하는 solution 함수를 완성

// 2. 조건
// 표 1칸은 1x1의 정사각형으로 이루어져 있다.
// 표의 값은 1또는 0으로만 이루어져 있다.
// 표는 2차원 배열로 주어진다.

const isSquare = (array) => {
  // 좌표가 4개가 아니면 정사각형이 아니다.
  if (array.length !== 4) return false;
};

const solution = (board) => {
  const points = [];

  board.forEach((horizontial, x) => {
    const temp = [];
    horizontial.forEach((vertical, y) => {
      // vertical이 1이면 x, y축 저장하기
      if (vertical === 1) {
        temp.push([x, y]);
      } else temp.push([]);
    });
    points.push(temp);
  });

  isSquare(points);

  // 정사각형은 모든 변의 길이가 같고, 두 대각선의 길이가 동일해야한다.

  console.log('points:: ', points);
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
