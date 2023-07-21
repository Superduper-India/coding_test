const solution = (people, limit) => {
  let answer = 0;
  //  people배열을 내림차순으로 정렬
  people.sort((a, b) => b - a);

  for (let i = 0, j = people.length - 1; i <= j; i++) {
    // console.log("i:", i, "j:", j);
    if (people[i] + people[j] > limit) {
      answer += 1;
      // console.log("합이 백보다 큰경우", answer);
    } else {
      answer += 1;
      // 비교한 대상인 최솟값은 제외하기 위해??
      j -= 1;
      // console.log("합이 백보다 작은경우", answer, j);
    }
  }

  return answer;
};

test("run", () => {
  expect(solution([70, 50, 80, 50], 100)).toBe(3);
  expect(solution([70, 80, 50], 100)).toBe(3);
});
