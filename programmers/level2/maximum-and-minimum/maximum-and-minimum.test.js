// 이전 숫자와 현재 숫자가 있을때 더 작은 숫자를 찾는 로직
const makeMin = (numberArr) => {
  let min = 0;
  // 비교당할 숫자
  const target = numberArr[0];
  for (let j = 1; j < numberArr.length; j++) {
    // 비교할 현재 숫자
    const now = numberArr[j];
    if (target < now) min = target;
    else min = now;
  }
  return min;
};

// 이전 숫자와 현재 숫자가 있을때 더 큰 숫자를 찾는 로직
const makeMax = (numberArr) => {
  let max = 0;
  // 비교당할 숫자
  const target = numberArr[0];
  for (let j = 1; j < numberArr.length; j++) {
    // 비교할 현재 숫자
    const now = numberArr[j];
    if (target > now) max = target;
    else max = now;
  }
  return max;
};

const solution = (s) => {
  const numberArr = s.split(" ").map((number) => +number);
  // console.log(">>>numberArr", numberArr);

  const min = makeMin(numberArr);
  const max = makeMax(numberArr);

  return min + " " + max;
};

test("run", () => {
  expect(solution("1 2 3 4")).toStrictEqual("1 4");
  expect(solution("-1 -2 -3 -4")).toStrictEqual("-4 -1");
  expect(solution("-1 -1")).toStrictEqual("-1 -1");
});
