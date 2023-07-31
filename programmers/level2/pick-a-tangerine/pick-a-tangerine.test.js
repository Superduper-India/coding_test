const solution = (k, tangerine) => {
  // tangerine배열에서 각요소의 중복개수를 각각 구한다.
  const obj = tangerine.reduce((acc, curr) => ({ ...acc, [curr]: (acc[curr] || 0) + 1 }), {});

  const count = Object.values(obj).sort((a, b) => b - a);

  let sum = 0;
  let answer = 0;
  // count를 하나씩 체크한다. 정렬해서 가장 큰 수부터 체크된다.
  for (let num of count) {
    // 한번 for문이 돌 때 마다 answer값에 1을 증가시키고,
    // sum값에 들어온 값들을 더해준다.
    answer++;
    sum += num;

    // sum의 값이 k보다 크거나 같으면 최솟값을 충족했으므로 for문을 중지시킨다.
    if (sum >= k) break;
  }

  return answer;
};

test('run', () => {
  expect(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])).toBe(3);
  expect(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])).toBe(2);
  expect(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])).toBe(1);
});
