const solution = (k, tangerine) => {
  const temp = [];
  // tangerine배열에서 각요소의 중복개수를 각각 구한다.
  const dd = tangerine.reduce((acc, curr) => ({ ...acc, [curr]: (acc[curr] || 0) + 1 }), {});

  const aa = Object.entries(dd).sort((a, b) => b[1] - a[1]);

  let sum = 0;
  aa.forEach((arr) => {
    // 각 배열 요소의 개수가 k보다 작고, 누산값이 k보다 작으면,
    if (arr[1] <= k && sum < k) {
      // 각 배열 요소의 개수를 누산시키고,
      sum = sum + arr[1];
      // temp에 해당 숫자값을 푸시한다.
      temp.push(arr[0]);
    }
  });
  return temp.length;
};

test('run', () => {
  expect(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])).toBe(3);
  expect(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])).toBe(2);
  expect(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])).toBe(1);
});
