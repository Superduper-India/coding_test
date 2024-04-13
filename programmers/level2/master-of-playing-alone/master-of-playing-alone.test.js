// 1. 원하는 것
// 상자 안에 들어있는 카드 번호가 순서대로 담긴 배열 cards가 매개변수로 주어질 때, 범희가 이 게임에서 얻을 수 있는 최고 점수를 구해서 return 하도록 solution 함수를 완성

// 2. 조건
// 임의의 상자를 하나 선택하여 선택한 상자 안의 숫자 카드를 확인합니다. 다음으로 확인한 카드에 적힌 번호에 해당하는 상자를 열어 안에 담긴 카드에 적힌 숫자를 확인한다. ... 이를 열어야 하는 상자가 이미 열려있을 때까지 반복한다.

// 위는 1번 상자 그룹이다. 1번 상자 그룹을 제외하고 남는 상자가 없으면 게임종료, 점수는 0점이다.
// 그렇지 않다면 남은 상자 중 다시 반복하고, 이는 2번 상자 그룹이다.

// 1번 상자 그룹의 상자 수와 2번 상자 그룹의 상자 수를 곱한 값이 게임의 점수이다.

// 카드 하나씩 확인하는 함수
const checkCards = (targetCards, prevBox) => {
  const box = [];
  const check = targetCards
    .map((num) => {
      if (!prevBox.includes(num)) return num;
    })
    .findIndex((item) => item === undefined);
  let index = check === -1 ? 0 : check;

  while (!box.includes(targetCards[index])) {
    box.push(targetCards[index]);
    index = targetCards[index] - 1;
  }

  return box;
};

const solution = (cards) => {
  let answer = 1;
  const results = [];
  let remainingBox = cards;
  let isLeftCards = true;

  while (isLeftCards) {
    const resultBox = checkCards(cards, remainingBox); // 현재 뽑은 카드의 결과
    results.push(resultBox.length); // 현재 뽑은 카드의 개수를 기록

    // 여기서 부터 다음턴 진행 여부 판단을 위해 남은 카드 확인
    remainingBox = [...remainingBox.filter((num) => !resultBox.includes(num))];
    isLeftCards = remainingBox.length ? true : false;
  }

  results.forEach((num) => {
    answer *= num;
  });

  return answer;
};

test('run', () => {
  expect(solution([8, 6, 3, 7, 2, 5, 1, 4])).toBe(12);
});
