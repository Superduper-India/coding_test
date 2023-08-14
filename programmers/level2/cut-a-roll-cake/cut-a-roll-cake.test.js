function solution(toppings) {
  let answer = 0;
  const mine = new Map();
  const yours = new Map();
  // 내 토핑에 해당하는 애들을 만든다
  // { 1 => 4, 2 => 2, 3 => 1, 4 => 1 }
  toppings.forEach((topping) => {
    if (mine.get(topping) === undefined) {
      mine.set(topping, 1);
    } else {
      mine.set(topping, mine.get(topping) + 1);
    }
  });

  // 시도2 => 기존 문제풀이 참고
  for (const kind of toppings) {
    // console.log("kind:", kind);
    // 1. 내 토핑에서 지금 토핑의 종류에 해당하는 개수 -1
    mine.set(kind, mine.get(kind) - 1);
    // 2. 너의 토핑에서 지금 토핑의 종류에 해당하는 개수 +1
    yours.set(kind, true);
    // if (yours.get(kind) === undefined) {
    //   yours.set(kind, 1);
    // } else {
    //   yours.set(kind, yours.get(kind) + 1);
    // }
    // console.log("yours:", yours);

    // 3. 남은 토핑이 더이상 없으면 토핑의 종류 삭제
    if (mine.get(kind) === 0) mine.delete(kind);
    // console.log("mine:", mine);

    // 4. mine과 yours객체의 사이즈를 각각 확인해서 사이즈가 같으면 answer++
    // console.log("mine.size:", mine.size);
    // console.log("yours.size:", yours.size);
    if (mine.size === yours.size) answer++;
  }

  // 시도1
  // for (let i = 0; i < toppings.length; i++) {
  //   for (const topping of mine) {
  //     const [kind, count] = topping;
  //     // 남은 토핑의 종류
  //     // console.log("kind:", kind);
  //     // 남은 토핑의 개수
  //     // console.log("count:", count);

  //     // 1. 내 토핑에서 지금 토핑의 종류에 해당하는 개수 -1
  //     mine.set(kind, mine.get(kind) - 1);
  //     // 2. 너의 토핑에서 지금 토핑의 종류에 해당하는 개수 +1
  //     yours.set(kind, true);
  //     // if (yours.get(kind) === undefined) {
  //     //   yours.set(kind, 1);
  //     // } else {
  //     //   yours.set(kind, yours.get(kind) + 1);
  //     // }
  //     // console.log("yours:", yours);

  //     // 3. 남은 토핑이 더이상 없으면 토핑의 종류 삭제
  //     if (mine.get(kind) === 0) mine.delete(kind);
  //     // console.log("mine:", mine);

  //     // 4. mine과 yours객체의 사이즈를 각각 확인해서 사이즈가 같으면 answer++
  //     console.log("mine.size:", mine.size);
  //     console.log("yours.size:", yours.size);
  //     if (mine.size === yours.size) answer++;
  //   }
  // }
  return answer;
}

test("run", () => {
  expect(solution([1, 2, 1, 3, 1, 4, 1, 2])).toBe(2);
  expect(solution([1, 2, 3, 1, 4])).toBe(0);
});
