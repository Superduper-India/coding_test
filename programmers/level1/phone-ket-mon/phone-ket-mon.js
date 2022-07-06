function solution(nums) {
  let pick = nums.length / 2;

  const phoneKetMon = nums.filter((mon, i, arr) => arr.indexOf(mon) === i);
  return phoneKetMon.length > pick ? pick : phoneKetMon.length;
}

// ToDo result 2

console.log(solution(
  [3, 1, 2, 3]
));
