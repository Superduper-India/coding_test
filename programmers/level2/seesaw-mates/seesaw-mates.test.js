const solution = (weights) => {
  let count = 0;
  const store = {}; // key-value의 형태로 여기에 저장한다.
  // 경우의 수 => 1, 1.5, 2, 1.33...
  const cases = [1, 3 / 2, 4 / 2, 4 / 3];

  // weights배열을 내림차순으로 정렬하고 반복문으로 돌리기
  weights
    .sort((a, b) => b - a)
    .forEach((w) => {
      let key;
      cases.forEach((c) => {
        key = w * c; // 현재 무게와 경우의 수의 비율을 곱한 값
        console.log(">>>key", key);
        console.log(">>>store", store);
        // 위의 값이 store객체에 존재하는 경우
        if (store[key]) {
          count += store[key];
        }
      });
      // store객체에 100, 180, 360, 100, 270 값들을 key값으로 가지고 있지 않은경우,
      if (!store[w]) store[w] = 1;
      // store객체에 100, 180... 이하 생략 값들을 key값으로 가지고 있는 경우,
      else store[w]++;

      // store { '100': 2, '180': 1, '270': 1, '360': 1 }
      // console.log("store", store);
    });

  console.log(count);
};

test("run", () => {
  expect(solution([100, 180, 360, 100, 270])).toBe(4);
});
