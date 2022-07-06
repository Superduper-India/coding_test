function solution(numbers) {
  let answer = 0;

  const fullNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const sortedNumbers = fullNumbers.filter(
    number => !numbers.includes(number)
  );

  sortedNumbers.map(number => {
    answer = answer + number;
  });

  return answer;
}

// ToDo result => 14

console.log(solution(
  [1, 2, 3, 4, 6, 7, 8, 0]
));
