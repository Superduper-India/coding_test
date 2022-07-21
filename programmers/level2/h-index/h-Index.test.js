function solution(citations) {
  citations.sort((a, b) => b - a);

  const hIndexNumber = citations.find((citation, index) => index + 1 > citation);

  if (!hIndexNumber && hIndexNumber != 0) {
    return citations.length;
  } else {
    return citations.indexOf(hIndexNumber);
  }
}

test("run", () => {
  expect(solution([3, 0, 6, 1, 5])).toBe(3);
  expect(solution([10, 50, 100])).toBe(3);
  expect(solution([0, 0, 0, 0, 0])).toBe(0);
});
