function solution(land) {
  // 1. 0번 인덱스 이후의 1, 2번 인덱스부터 시작한다.
  for (let i = 1; i < land.length; i++) {
    // 2. 열의 4개의 요소를 반복문으로 탐색한다.
    for (let j = 0; j < 4; j++) {
      // 3. 이전 열에서 현재 인덱스를 제외한 요소들 중 최댓값 구하기
      const preMaxNum = Math.max(...land[i - 1].filter((_, preI) => j !== preI));
      // 4. 현재 열의 요소들에 각각 위의 최댓값을 더해준다.
      land[i][j] = land[i][j] + preMaxNum;
    }
  }

  return Math.max(...land.pop());
}

test('run', () => {
  expect(
    solution([
      [1, 2, 3, 5],
      [5, 6, 7, 8],
      [4, 3, 2, 1],
    ])
  ).toBe(16);
});
