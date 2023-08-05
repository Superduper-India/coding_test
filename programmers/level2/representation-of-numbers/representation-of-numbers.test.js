const solution = (n) => {
  const allNumbers = [];
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    allNumbers.push(i);
  }

  allNumbers.forEach((_, index) => {
    // number => 1, 2, 3, 4, 5, 6, ... 15
    let sum = 0;
    allNumbers.slice(index, allNumbers.length).forEach((number) => {
      if (sum === 15) {
        sum = 0;
        answer++;
      } else sum = sum + number;
    });
  });

  return answer;
};

test('run', () => {
  expect(solution(15)).toBe(4);
});
