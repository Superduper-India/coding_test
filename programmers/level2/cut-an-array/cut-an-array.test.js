const solution = (n, left, right) => {
  // 1. n행 n열 크기의 비어있는 2차원 베열을 만든다.
  const array = Array.from({ length: n }).fill(
    Array.from({ length: n }).fill(n)
  );

  array.forEach((_, y) => {
    // array[y] 순서대로 첫번째y, 두번째y, 세번째y
    console.log(y); // 0 => 1 => 2
    array[y].forEach((_, x) => {
      // array[y][x] 순서대로 첫번째x, 두번째x, 세번째x
      console.log(x); // 0,1,2 => 0,1,2 => 0,1,2
    });
  });
};

test("run", () => {
  expect(solution(3, 2, 5)).toBe([3, 2, 2, 3]);
  expect(solution(4, 7, 14)).toBe([4, 3, 3, 3, 4, 4, 4, 4]);
});
