function solution(absolutes, signs) {
  let answer = 0;
  const len = signs.length;

  function sumNegative(index) {
    answer -= absolutes[index];
  }

  function sumPositive(index) {
    answer += absolutes[index];
  }

  for (let i = 0; i < len; i++) {
    if (!signs[i]) {
      sumNegative(i);
    } else {
      sumPositive(i);
    }
  }

  return answer;
}

// target result => 9

console.log(solution(
  [4, 7, 12],
  [true, false, true],
));
