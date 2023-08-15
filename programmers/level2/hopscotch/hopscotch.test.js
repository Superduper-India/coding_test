function solution(land) {
  let memory = [];

  // 아래 풀이도 시간초과 ㅠㅠ
  for (let i = 0; i < land.length; i++) {
    if (i === 0) {
      memory = land[i];
    } else {
      let maxI = memory.indexOf(Math.max(...memory));
      let temp = memory.indexOf(Math.max(...memory));
      memory = land[i];
      for (let j = 0; j < memory.length; j++) {
        if (j === maxI) {
          temp = j - 1;
          memory[j] = memory[j] + land[i - 1][temp];
        } else memory[j] = memory[j] + land[i - 1][maxI];
      }
    }
  }

  return Math.max(...memory);
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
