function solution(n, wires) {
  // 모든 와이어스에 대해서 끊었을 경우, 2그룹으로 나누어지는데, 이 때 각 그룹의 갯수의 차를
  // 구한다.
  // 차 중에서 가장 작은값을 반환한다.
  const differenceOfTowers = wires.map(([parent, child], index) => {
    const filteredWires = wires.filter((_, i) => index !== i);

    const countOfParentTowers = countOfTowers(
      parent, filteredWires
    );
    const countOfchildTowers = countOfTowers(
      child, filteredWires
    );
    return Math.abs(countOfParentTowers - countOfchildTowers);
  });

  return Math.min(...differenceOfTowers);
}

const countOfTowers = (target, towers) => {
  const t1 = towers
    .filter(([left, right]) => target === left)
    .map(([left, right]) => right);

  const t2 = towers
    .filter(([left, right]) => target === right)
    .map(([left, right]) => left);

  const childTowers = [...t1, ...t2];

  const withoutParentTowers = towers
    .filter(([left, right]) => target !== left)
    .filter(([left, right]) => target !== right);

  let sum = 0;
  childTowers.forEach((childTower) => {
    const result = countOfTowers(childTower, withoutParentTowers);
    sum += result;
  });

  return 1 + sum;
};

test("countOfTowers", () => {
  // 시작점과, 연결 목록을 주면, 시작점과 연결된 타워들의 총 갯수를 주는 애
  // ToDo 모든 경우의 수를 구해서 경우의 수끼리 뺏을때 최소값을 구한다.
  expect(countOfTowers(
    3, [[2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]])
  ).toBe(8); // [1, 3]을 끊었을 때 3에 연결된 자식의 개수는 8이다.
  expect(countOfTowers(
    1, [[2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]])
  ).toBe(1);

  expect(countOfTowers(
    2, [[1, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]])
  ).toBe(1);
  expect(countOfTowers(
    3, [[1, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]])
  ).toBe(8);

  expect(countOfTowers(
    3, [[1, 3], [2, 3], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]])
  ).toBe(3);
  expect(countOfTowers(
    4, [[1, 3], [2, 3], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]])
  ).toBe(6);

  expect(countOfTowers(
    4, [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [7, 8], [7, 9]])
  ).toBe(6);
  expect(countOfTowers(
    7, [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [7, 8], [7, 9]])
  ).toBe(3);
});

test("solution", () => {
  expect(solution(
    9, [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]])
  ).toBe(3);
});
