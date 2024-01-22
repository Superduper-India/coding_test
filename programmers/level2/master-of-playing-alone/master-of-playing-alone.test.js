// 1. 원하는 것
// 상자 안에 들어있는 카드 번호가 순서대로 담긴 배열 cards가 매개변수로 주어질 때, 범희가 이 게임에서 얻을 수 있는 최고 점수를 구해서 return 하도록 solution 함수를 완성

// 2. 조건
// 임의의 상자를 하나 선택하여 선택한 상자 안의 숫자 카드를 확인합니다. 다음으로 확인한 카드에 적힌 번호에 해당하는 상자를 열어 안에 담긴 카드에 적힌 숫자를 확인한다. ... 이를 열어야 하는 상자가 이미 열려있을 때까지 반복한다.

// 위는 1번 상자 그룹이다. 1번 상자 그룹을 제외하고 남는 상자가 없으면 게임종료, 점수는 0점이다.
// 그렇지 않다면 남은 상자 중 다시 반복하고, 이는 2번 상자 그룹이다.

// 1번 상자 그룹의 상자 수와 2번 상자 그룹의 상자 수를 곱한 값이 게임의 점수이다.

const solution = (cards) => {
  // 1번부터 여는것부터 시작해서 각 경우의 수를 모두 구한다.

  // 박스가 열렸는지 유무를 판단한다.
  const openedBoxs = Array.from({ length: cards.length }).fill(false);
  const result = [];

  for (let i = 0; i < cards.length; i++) {
    let idx = i;
    let count = 0;
    while (true) {
      if (!openedBoxs[idx]) {
        // 지금 상자가 안열렸으면,
        // 열림 표시
        openedBoxs[idx] = true;
        // 다음 인덱스 지정
        idx = cards[idx] - 1;
        count++;
      } else {
        // 지금 상자가 열렸으면,
        result.push(count);
        break;
      }
    }
  }

  const sortResult = result.filter((v) => v !== 0).sort((a, b) => b - a);

  return sortResult.length > 1 ? sortResult[0] * sortResult[1] : 0;
};

test('run', () => {
  expect(solution([8, 6, 3, 7, 2, 5, 1, 4])).toBe(12);
});
