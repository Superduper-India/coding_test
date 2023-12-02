// 원하는 것
// 길이가 같은 두 개의 큐를 나타내는 정수 배열 queue1, queue2가 매개변수로 주어집니다. 각 큐의 원소 합을 같게 만들기 위해 필요한 작업의 최소 횟수를 return 하도록 solution 함수를 완성해주세요. 단, 어떤 방법으로도 각 큐의 원소 합을 같게 만들 수 없는 경우, -1을 return

// 조건
// 한 번의 pop과 한 번의 insert를 합쳐서 작업을 1회 수행한 것으로 간주
// 각 큐의 합을 같게 만들어야 한다

const solution = (queue1, queue2) => {
  let sum1 = queue1.reduce((prev, curr) => prev + curr, 0);
  let sum2 = queue2.reduce((prev, curr) => prev + curr, 0);

  const target = (sum1 + sum2) / 2;
  const q = [...queue1, ...queue2];
  let q1Pointer = 0;
  let q2Pointer = queue1.length;

  for (let cnt = 0; cnt < queue1.length * 3; cnt++) {
    // 기저조건
    if (sum1 === target) return cnt;

    if (sum1 > target) {
      sum1 = sum1 - q[q1Pointer++ % q.length];
      console.log('sum1 > target:', sum1);
    } else {
      sum1 = sum1 + q[q2Pointer++ % q.length];
      console.log('sum1 < target:', sum1);
    }
  }

  return -1;
};

test('run', () => {
  expect(solution([3, 2, 7, 2], [4, 6, 5, 1])).toBe(2);
  expect(solution([1, 2, 1, 2], [1, 10, 1, 2])).toBe(7);
  expect(solution([1, 1], [1, 5])).toBe(-1);
});
