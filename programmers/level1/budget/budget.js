function solution(d, budget) {
  d.sort((a, b) => a - b);
  let answer = 0;

  for (let i = 0; i < d.length; i++) {
    budget -= d[i];

    budget >= 0 ? answer++ : answer;
  }

  return answer;
}

// Todo result 3

console.log(solution([1, 3, 2, 5, 4], 9));