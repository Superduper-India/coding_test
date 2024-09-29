// 1. 원하는 것
// 철수가 가진 카드에 적힌 숫자들을 나타내는 정수 배열 arrayA와 영희가 가진 카드에 적힌 숫자들을 나타내는 정수 배열 arrayB가 주어졌을 때, 주어진 조건을 만족하는 가장 큰 양의 정수 a를 return하도록 solution 함수를 완성해 주세요. 만약, 조건을 만족하는 a가 없다면, 0을 return

// 2. 조건
// 철수가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고 영희가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a
// 영희가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고, 철수가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a

// 정수는 음수, 양수를 포함하는 모든 수

const getGcd = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const solution = (arrayA, arrayB) => {
  let answer = 0;
  let [gcdA, gcdB] = [arrayA[0], arrayB[0]];

  // case1. arrayA에 담긴 숫자들의 최대공약수를 구한다.
  for (let i = 1; i < arrayA.length; i++) {
    gcdA = getGcd(gcdA, arrayA[i]);
    gcdB = getGcd(gcdB, arrayB[i]);
  }

  // => case1에서 구한 수로 arrayB의 모든 수를 나눌 수 없어야 한다.
  if (arrayA.every((item) => item % gcdB !== 0)) answer = Math.max(answer, gcdB);
  if (arrayB.every((item) => item % gcdA !== 0)) answer = Math.max(answer, gcdA);

  return answer;
};

test('run', () => {
  expect(solution([10, 17], [5, 20])).toBe(0);
  expect(solution([10, 20], [5, 17])).toBe(10);
  expect(solution([14, 35, 119], [18, 30, 102])).toBe(7);
});
