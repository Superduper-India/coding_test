const solution = (n) => {
  // try3. "주어진 자연수를 연속되는 자연수들의 합으로 표현할 수 있는 방법의 수는 주어진 자연수의 약수 중에서 홀수인 수의 개수와 같다."
  // 자연수의 약수
  // 1~15까지의 숫자들을 담은 배열을 만든다.
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 !== 0) arr.push(i);
  }

  return arr.length;

  // let count = 1;

  // try2. 반복문
  // while (arr.length !== 0) {
  //   arr.reduce((sumValue, currValue) => {
  //     if (sumValue === n) {
  //       count = count + 1;
  //     } else return sumValue + currValue;
  //   }, 0);
  //   arr.splice(0, 1);
  // }

  // try1. 자기자신을 호출하는 재귀함수
  // const self = (arr) => {
  //   arr.reduce((sumValue, currValue) => {
  //     if (sumValue === n) {
  //       count = count + 1;
  //     } else return sumValue + currValue;
  //   }, 0);

  //   // 기저조건
  //   if (arr.length === 0) return (count = count + 1);
  //   arr.splice(0, 1);
  //   self(arr);
  // };

  // self(arr);
  // return count;
};

test('run', () => {
  expect(solution(15)).toBe(4);
});
