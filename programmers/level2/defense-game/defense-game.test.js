// 1. 원하는 것
// 처음 가지고 있는 병사의 수 n, 사용 가능한 무적권의 횟수 k, 매 라운드마다 공격해오는 적의 수가 순서대로 담긴 정수 배열 enemy가 매개변수로 주어질때 무적권을 적절한 시기에 사용하여 진행할 수 있는 라운드의 최댓값을 구하라

// 2. 조건
// - 무적권을 사용하면 병사의 소모없이 한 라운드의 공격을 막을 수 있다.
// - 무적권은 최대 k번 사용할 수 있다.

const solution = (n, k, enemy) => {
  // if (k === enemy.length) return k; // 무적권의 개수가 공격의 개수와 같으면 그대로 리턴

  // n => 처음 가지고 있는 병사의 수
  // k => 사용 가능한 무적권의 횟수
  // enemy의 요소 => 매 라운드마다 공격해오는 적의 수

  // k를 enemy의 요소로 나눠서 나머지의 경우의 수를 모두 구한다.
  const rest = [];
  enemy.forEach((item) => {
    rest.push(n % item);
  });
  console.log(rest);
};

test('run', () => {
  expect(solution(7, 3, [4, 2, 4, 5, 3, 3, 1])).toBe(5);
  expect(solution(2, 4, [3, 3, 3, 3])).toBe(4);
});
