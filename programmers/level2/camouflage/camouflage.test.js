function solution(clothes) {
  let answer = 1;

  const categorizedClothes = {};

  clothes.map(cloth => {
    if (!categorizedClothes[cloth[1]]) categorizedClothes[cloth[1]] = 0;
    categorizedClothes[cloth[1]] += 1;
  });

  const keys = Object.keys(categorizedClothes);

  for (const key of keys) {
    answer = answer * (categorizedClothes[key] + 1);
  }

  return answer - 1;
}

test("run", () => {
  expect(solution(
    [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]
  )).toEqual(5);
  expect(solution(
    [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]
  )).toEqual(3);
});
