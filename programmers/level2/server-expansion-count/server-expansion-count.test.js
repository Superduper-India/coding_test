function solution(players, m, k) {
  let count = 0; // 증설 횟수
  const serverStatus = Array.from({ length: players.length }).fill(0);

  players.forEach((playerCount, index) => {
    if (playerCount < m) return;
    const neededServerCount = Math.floor(playerCount / m) - serverStatus[index];

    // 서버 증설 필요
    if (0 < neededServerCount) {
      count = count + neededServerCount;
      for (let i = index; i < k + index; i++) {
        serverStatus[i] = serverStatus[i] + neededServerCount;
      }
    }
  });

  return count;
}

test('run', () => {
  expect(
    solution([0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5], 3, 5),
  ).toBe(7);
  expect(
    solution([0, 0, 0, 10, 0, 12, 0, 15, 0, 1, 0, 1, 0, 0, 0, 5, 0, 0, 11, 0, 8, 0, 0, 0], 5, 1),
  ).toBe(11);
  expect(
    solution([0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 5, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1], 1, 1),
  ).toBe(12);
});
