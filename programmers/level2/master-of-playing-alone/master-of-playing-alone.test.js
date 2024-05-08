// 1. 원하는 것
// 상자 안에 들어있는 카드 번호가 순서대로 담긴 배열 cards가 매개변수로 주어질 때, 범희가 이 게임에서 얻을 수 있는 최고 점수를 구해서 return 하도록 solution 함수를 완성

// 2. 조건
// 임의의 상자를 하나 선택하여 선택한 상자 안의 숫자 카드를 확인합니다. 다음으로 확인한 카드에 적힌 번호에 해당하는 상자를 열어 안에 담긴 카드에 적힌 숫자를 확인한다. ... 이를 열어야 하는 상자가 이미 열려있을 때까지 반복한다.

// 위는 1번 상자 그룹이다. 1번 상자 그룹을 제외하고 남는 상자가 없으면 게임종료, 점수는 0점이다.
// 그렇지 않다면 남은 상자 중 다시 반복하고, 이는 2번 상자 그룹이다.

// 1번 상자 그룹의 상자 수와 2번 상자 그룹의 상자 수를 곱한 값이 게임의 점수이다.

const solution = (cards) => {
  // 상자를 열었는지 유무를 판단하는 배열을 따로 만든다
  const checkToOpenBox = Array.from({ length: cards.length }).fill(false)

  let isNotOver = checkToOpenBox.filter(box => !box).length > 0 // 게임진행유무
  let currIdx = checkToOpenBox.findIndex(box => !box) // checkToOpenBox에서 false인 값중 가장 작은 인덱스를 구해야함

  let count = 0
  let answer = 0

  while (isNotOver) {
    while (!checkToOpenBox[currIdx]) {
      // cards 상자를 열고, 이때마다 checkToOpenBox에 해당하는 것을 true로 변경한다
      checkToOpenBox[currIdx] = true // 상자 열림 체크
      count++ // 상자를 여는데 성공
      currIdx = cards[currIdx] - 1 // 다음 상자를 열기 위해 현재 인덱스 업데이트
    }
    isNotOver = checkToOpenBox.filter(box => !box).length > 0 // 게임진행유무
    currIdx = checkToOpenBox.findIndex(box => !box) // checkToOpenBox에서 false인 값중 가장 작은 인덱스를 구해야함

    answer = !answer ? count : answer * count
    count = 0
  }

  return answer
};

test('run', () => {
  expect(solution([8, 6, 3, 7, 2, 5, 1, 4])).toBe(12);
});
