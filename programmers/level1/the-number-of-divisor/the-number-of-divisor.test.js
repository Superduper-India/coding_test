const carculator = (count, targetNumber) => {
  if (count % 2 == 0) { //짝수일 경우
    return +targetNumber;
  } else { //홀수일 경우
    return -targetNumber;
  }
};

const getDivisor = (targetNumber) => {
  let index = 1;
  let count = 0;

  while (index <= targetNumber) {
    if (targetNumber % index == 0) {
      count += 1;
    }
    index += 1;
  }

  return carculator(count, targetNumber);
};

function solution(left, right) {
  let number = left;
  let sum = 0;

  while (number <= right) {
    const result = getDivisor(number);
    sum += result;
    number = number + 1;
  }

  return sum;
}

test("run", () => {
  expect(solution(
    13, 17, 24, 27
  )).toEqual(43, 52);
});
