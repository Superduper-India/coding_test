const solution = (clothes) => {
  let answer = 1;
  const hashClothe = {};

  for (const arr of clothes) {
    hashClothe[arr[1]] = (hashClothe[arr[1]] || 0) + 1;
  }

  for (const key in hashClothe) {
    answer *= hashClothe[key] + 1;
  }

  return answer - 1;
};

test('run', () => {
  expect(
    solution([
      ['yellow_hat', 'headgear'],
      ['blue_sunglasses', 'eyewear'],
      ['green_turban', 'headgear'],
    ]),
  ).toBe(5);
  expect(
    solution([
      ['crow_mask', 'face'],
      ['blue_sunglasses', 'face'],
      ['smoky_makeup', 'face'],
    ]),
  ).toBe(3);
});
