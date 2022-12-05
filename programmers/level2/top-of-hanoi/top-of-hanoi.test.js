function solution(n) {
  let answer = [];

  const hanoi = (num, start, mid, end) => { // 1️⃣ n=2, start=1, mid=2, end=3 // 2️⃣ n=1, start=1, mid=3, end=2 // 3️⃣ n=1, start=2, mid=1, end=3
    if (num === 1) { // 1️⃣ n !==1 // 2️⃣ n === 1 // 3️⃣ n === 1
      answer.push([start, end]); // 2️⃣ answer.push([1,2]); // 3️⃣ answer.push([2,3]);
      return; // 함수 종료 => stack1꺼내옴
    }
    hanoi(num - 1, start, end, mid); // 2️⃣ hanoi호출 [stack1: n=2, start=1, mid=2, end=3]
    answer.push([start, end]); // 1️⃣ answer.push([1, 3]);
    hanoi(num - 1, mid, start, end); // 3️⃣ hanoi호출
  };

  hanoi(n, 1, 2, 3); // 1️⃣ hanoi호출

  return answer;
}

test("run", () => {
  expect(solution(2)).toStrictEqual([[1, 2], [1, 3], [2, 3]]);
});
