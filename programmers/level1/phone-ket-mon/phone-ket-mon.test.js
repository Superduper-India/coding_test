function solution(nums) {
  const pickNumber = nums.length / 2;
  const uniqueNumbers = [...new Set(nums)].length;

  if (uniqueNumbers >= pickNumber) {
    return pickNumber;
  } else {
    return uniqueNumbers;
  }
}

test("run", () => {
  expect(solution([3, 1, 2, 3])).toEqual(2);
  expect(solution([3, 3, 3, 2, 2, 4])).toEqual(3);
  expect(solution([3, 3, 3, 2, 2, 2])).toEqual(2);
});
