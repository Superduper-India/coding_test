function solution(toppings) {
  const len = toppings.length;
  let count = 0;

  for (let i = 0; i < len - 1; i++) {
    // 1. 배열의 순서를 정돈하지 않은 상태에서 배열을 순회하면서 각각의 위치에서 자른다.
    let tempArr1;
    let tempArr2;
    // 2. filter메서드로 중복값을 제거한다.
    tempArr1 = toppings
      .slice(0, i + 1)
      .filter((item, i, arr) => arr.indexOf(item) === i);
    tempArr2 = toppings
      .slice(i + 1, len)
      .filter((item, i, arr) => arr.indexOf(item) === i);
    // 3. 각 배열의 길이를 비교해서 같으면 count를 증가시킨다.
    if (tempArr1.length === tempArr2.length) count++;
  }

  return count;
}

test("run", () => {
  expect(solution([1, 2, 1, 3, 1, 4, 1, 2])).toBe(2);
  expect(solution([1, 2, 3, 1, 4])).toBe(0);
});
