// 원하는 것
// 정수 n, left, right가 매개변수로 주어집니다. 주어진 과정대로 만들어진 1차원 배열을 return 하도록 solution 함수를 완성

// 계획
// i로 구하는 좌표값으로 문제풀이
// x는 i/n(몫)이고,
// y는 i%n(나머지)이다.

const solution = (n, left, right) => {
  const answer = [];

  for (let i = left; i <= right; i++) {
    const x = Math.floor(i / n);
    const y = i % n;
    if (x > y) answer.push(x + 1);
    else answer.push(y + 1);
  }

  return answer;
};

test('run', () => {
  expect(solution(3, 2, 5)).toStrictEqual([3, 2, 2, 3]);
  expect(solution(4, 7, 14)).toStrictEqual([4, 3, 3, 3, 4, 4, 4, 4]);
});
