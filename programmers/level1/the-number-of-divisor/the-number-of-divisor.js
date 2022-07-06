function solution(left, right) {
  let count = 0;
  let answer = 0;

  let number = left;
  const numbersArr = [];
  numbersArr.push(number);

  for (let i = 1; i <= right - left; i++) {
    number += 1;
    numbersArr.push(number);
  }

  numbersArr.map(number => {
    for (let i = 1; i <= number; i++) {
      if (number % i == 0) {
        count++;
      }
    }

    if (count % 2 == 0) {
      answer += number;
    } else {
      answer -= number;
    }

    count = 0;
    return answer;
  });

  return answer;
}

console.log(solution(13, 17));
