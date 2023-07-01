const solution = (arrA, arrB) => {
  // 나의 풀이
  // if (arrA.length == 1) {
  //   return arrA[0] * arrB[0];
  // }
  // const minNum = Math.min(...arrA);
  // arrA.splice(arrA.indexOf(minNum), 1);
  // const maxNum = Math.max(...arrB);
  // arrB.splice(arrB.indexOf(maxNum), 1);
  // return minNum * maxNum + solution(arrA, arrB);
  let sum = 0;
  arrA.sort((a, b) => b - a);
  arrB.sort((a, b) => a - b);
  arrA.forEach((num, index) => {
    sum = sum + num * arrB[index];
  });
  return sum;
};

test('run', () => {
  expect(solution([1, 4, 2], [5, 4, 4])).toBe(29);
  expect(solution([1, 2], [3, 4])).toBe(10);
});
