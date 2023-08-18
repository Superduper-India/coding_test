const solution = (k, tangerine) => {
  let all = new Map();
  let boxCount = 0;
  let answer = 0;

  // 1. 숫자에 대한 가짓수를 맵 자료형에 담는다.
  tangerine.forEach((item) => {
    if (all.get(item) == undefined) all.set(item, 0);
    all.set(item, all.get(item) + 1);
  });

  // 2. 내림차순으로 정렬
  all = Array.from(all).sort((a, b) => b[1] - a[1]);

  for (const [_, n] of all) {
    // 3. 가짓수가 k이상이면 1을 리턴한다.
    if (n > k) return 1;
    answer++;
    boxCount = boxCount + n;
    // 박스에 담긴 귤의 갯수가 k가 되면 반복문을 빠져나온다.
    if (boxCount === k) break;
  }

  return answer;
};

test("run", () => {
  expect(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])).toBe(3);
  expect(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])).toBe(2);
  expect(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])).toBe(1);
});
