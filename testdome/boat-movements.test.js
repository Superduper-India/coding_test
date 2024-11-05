// Boat Movements
// 1. 원하는 것
// canTravelTo 보트로 목적지에 도달할 수 있는지 확인하기.

// 2. 조건
// 물이 있는 경우 true, 땅이 있는 경우 false
// 배는 물 속을 통해서 목적지까지 직선 경로로만 이동할 수 있다 => true
// 가는길에 육지가 있으면 => false
// 범위를 벗어나면 => false
const solution = (gameMatrix, fromRow, fromColumn, toRow, toColumn) => {
  const target = gameMatrix[toColumn][toRow];
  const checkArr = [
    [fromRow - 1, fromColumn],
    [fromRow + 1, fromColumn],
    [fromRow, fromColumn - 1],
    [fromRow, fromColumn + 1],
    [fromRow, fromColumn + 2],
  ];
  const check = checkArr.find(([r, c]) => r === toRow && c === toColumn);
  if (target === false || target === undefined || check === undefined) return false;

  const [rTop, cTop] = [fromRow - 1, fromColumn]; // 상
  const [rBtm, cBtm] = [fromRow + 1, fromColumn]; // 하
  const [rLeft, cLeft] = [fromRow, fromColumn - 1]; // 좌

  const isCheckTop = toRow === rTop && toColumn === cTop;
  const isCheckLeft = toRow === rLeft && toColumn === cLeft;
  const isCheckBtm = toRow === rBtm && toColumn === cBtm;
  // 상, 좌, 하인 경우
  if (isCheckTop || isCheckLeft || isCheckBtm) {
    return target;
  } else {
    // 우의 목적지 까지 가는길에 false가 없어야됨
    const [rPath, cPath] = [fromRow, fromColumn + 1]; // 우의 목적지까지 가는길
    const path = gameMatrix[cPath][rPath];
    return path && target;
  }
};

const gameMatrix = [
  [false, true, true, false, false, false],
  [true, true, true, false, false, false],
  [true, true, true, true, true, true],
  [false, true, true, false, true, true],
  [false, true, true, true, false, true],
  [false, false, false, false, false, false],
];

test('run', () => {
  expect(solution(gameMatrix, 3, 2, 2, 2)).toBe(true);
  expect(solution(gameMatrix, 3, 2, 3, 4)).toBe(false);
  expect(solution(gameMatrix, 3, 2, 6, 4)).toBe(false);
  expect(solution(gameMatrix, 3, 2, 3, 5)).toBe(false);
});
