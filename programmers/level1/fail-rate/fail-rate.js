function solution(N, stages) {
  let answer = [];
  let totalPlayers = stages.length;

  for (let i = 1; N >= i; i++) {
    const stagePlayers = stages.filter(stage => stage === i).length;
    answer.push([i, stagePlayers / totalPlayers]);
    totalPlayers -= stagePlayers;
  }

  answer.sort((a, b) => b[1] - a[1]);
  const result = answer.map(a => a[0]);
  return result;
}

// ToDo result [3,4,2,1,5]

console.log(solution(
  5, [2, 1, 2, 6, 2, 4, 3, 3]
));
