function solution(arr) {
  const min = Math.min(...arr);
  const filteredArr = arr.filter(num => num !== min);
  if (filteredArr.length === 0) return [-1];
  return filteredArr;
}

test("run", () => {
  expect(solution([4, 3, 2, 1])).toStrictEqual([4, 3, 2]);
  expect(solution([10])).toStrictEqual([-1]);
});
