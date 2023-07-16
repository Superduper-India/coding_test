const solution = (arrA, arrB) => {
  let sum = 0;
  // 오름차순 정렬
  const ascending = arrA.sort((a, b) => {
    return a - b;
  });
  // 내림차순 정렬
  const descending = arrB.sort((a, b) => {
    return b - a;
  });

  arrA.forEach((num, index) => {
    sum = sum + num * arrB[index];
  });

  return sum;
};

test('run', () => {
  expect(solution([1, 4, 2], [5, 4, 4])).toBe(29);
  expect(solution([1, 2], [3, 4])).toBe(10);
});
