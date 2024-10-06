// 1. 원하는 것
// 처음 가지고 있는 병사의 수 n, 사용 가능한 무적권의 횟수 k, 매 라운드마다 공격해오는 적의 수가 순서대로 담긴 정수 배열 enemy가 매개변수로 주어질때 무적권을 적절한 시기에 사용하여 진행할 수 있는 라운드의 최댓값을 구하라

// 2. 조건
// - 무적권을 사용하면 병사의 소모없이 한 라운드의 공격을 막을 수 있다.
// - 무적권은 최대 k번 사용할 수 있다.
// - 모든 라운드를 막을 수 있는 경우에는 enemy[i]의 길이를 리턴

// 최대한 많은 라운드를 진행하려면 무적권을 모두 소모하고 남은 라운드의 적의 수를 최소로 만들어야 한다. k번째 라운드까지는 모두 무적권으로 막을 수 있지만 k+1번째 라운드부터 매번 지금까지의 모든 라운드 중 최소한의 적이 등장하는 라운드만을 골라서 무적권을 사용하지 않고 병사로 막는다면 최대한 많은 라운드를 진행할 수 있다.

const solution = (n, k, enemy) => {
  let usedN = 0; // 무적권을 쓰지 않고 얼마나 처리했는지의 합
  if (enemy.length === k) return enemy.length; // 모든 라운드를 막을 수 있는 경우

  // 우선순위 큐를 이용한다.
  const queue = enemy.slice(0, k); // 무적권을 사용해서 무조건 통과할 수 있는 최소 라운드
  for (let i = k; i < enemy.length; i++) {
    console.log('현재 라운드:: ', i);
    queue.push(enemy[i]);
    queue.sort((a, b) => b - a);
    const min = queue.pop();
    usedN += min;
    console.log('지금까지 사용한 병사:: ', usedN);
    console.log('전체 병사:: ', n);
    if (usedN > n) return i;
  }

  return enemy.length; // for문을 다 돌았다면 모든 라운드를 진행할 수 있는 것이므로
};

test('run', () => {
  expect(solution(7, 3, [4, 2, 4, 5, 3, 3, 1])).toBe(5);
  expect(solution(2, 4, [3, 3, 3, 3])).toBe(4);
});
