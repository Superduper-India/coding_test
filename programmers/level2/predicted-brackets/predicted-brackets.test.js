const solution = (n, a, b) => {
  let round = 0;

  // 재귀함수로 문제를 풀었다.
  const self = (a, b) => {
    console.log(a, b);
    // 기저조건. a와 b가 같아지면 재귀함수 호출을 멈춘다.
    if (a === b) return;
    // a와 b가 같지 않으면 다음 경기를 진행한다. (각 참가자는 n/2번의 번호를 부여받는다.)
    round++;
    self(Math.ceil(a / 2), Math.ceil(b / 2));
  };
  self(a, b);

  return round;
};

test("run", () => {
  expect(solution(8, 4, 7)).toBe(3);
});
