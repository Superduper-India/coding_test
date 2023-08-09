const solution = (weights) => {
  let tempMap = new Map();
  let matesMap = new Map();

  // 100, 180, 360, 100, 270 각 요소들을 순회하며 해당 요소의 짝꿍이 될 수 있는 요소가 있는지 확인한다.
  weights.forEach((myWeight, i) => {
    // temp맵의 각 값들을 배열에 담아준다. => 현재 요소의 짝꿍이 될 수 있는 조건이다.
    const condition = [
      tempMap.get(myWeight * 2),
      tempMap.get(myWeight * 3),
      tempMap.get(myWeight * 4),
    ];
    condition.forEach((yourWeight, j) => {
      // temp맵의 각 값들을 담은 배열의 요소가 undefind면 temp맵에 현재 인덱스 값을 담아준다.
      if (!yourWeight) {
        tempMap.set(myWeight * (j + 2), [i]);
      } else {
        yourWeight.forEach((weight) => {
          // 이전에 없던 시소 짝꿍인 경우
          console.log(matesMap.get(yourWeight[weight]));
        });
      }
    });
  });
};

test("run", () => {
  expect(solution([100, 180, 360, 100, 270])).toBe(4);
});
