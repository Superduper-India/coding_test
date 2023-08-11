const solution = (n, words) => {
  let order = 0;
  let round = 0;

  for (let i = 0; i < words.length; i++) {
    // 0부터 현재 인덱스를 기준 바로 앞전 인덱스 까지의 요소를 제외한 배열
    // 예를 들어 현재 인덱스가 1이면 앞전 인덱스는 0
    const previousWords = words.slice(0, i);
    // 이번 차례 사람이 말한 단어
    const now = words[i];
    // 이전 차례 사람이 말한 단어
    const previous = words[i - 1];
    // 지금 사람이 몇 번째 순서인지
    const temp = (i % n) + 1;
    // 끝말잇기가 현재 몇 번째 라운드인지
    round = Math.ceil((i + 1) / n);

    // i가 0보다 커야하는 이유는 i가 0부터 시작하면 그 전 인덱스의 요소가 undefined이기 때문에 에러가 난다.
    if (i > 0) {
      // console.log(">>>now", now);
      // console.log(">>>previous", previous);
      if (
        previousWords.includes(now) ||
        now.length === 1 ||
        now[0] !== previous[previous.length - 1]
      ) {
        order = temp;
        // break하는 조건은 다음과 같다.
        // 1. 현재 단어가 이전에 등장했던 단어인지
        // 2. 현재 단어가 한 글자인지
        // 3. 현재 단어의 첫 글자가 전 단어의 마지막 글자와 일치하지 않을 때
        break;
      }
    }
  }

  return !order ? [0, 0] : [order, round];
};

test("run", () => {
  expect(
    solution(3, [
      "tank",
      "kick",
      "know",
      "wheel",
      "land",
      "dream",
      "mother",
      "robot",
      "tank",
    ])
  ).toStrictEqual([3, 3]);
  expect(
    solution(5, [
      "hello",
      "observe",
      "effect",
      "take",
      "either",
      "recognize",
      "encourage",
      "ensure",
      "establish",
      "hang",
      "gather",
      "refer",
      "reference",
      "estimate",
      "executive",
    ])
  ).toStrictEqual([0, 0]);
  expect(
    solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
  ).toStrictEqual([1, 3]);
});
