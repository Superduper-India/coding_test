function solution(toppings) {
  let count = 0;

  const allToppings = new Map();
  const brother = new Map();

  toppings.forEach((item) => {
    // Map 자료구조에 각 토핑의 개수가 몇개인지 넣어준다.
    // {1 => 4, 2 => 2, 3 => 1, 4 => 1}
    allToppings.set(item, (allToppings.get(item) || 0) + 1);
  });

  for (const item of toppings) {
    // 토핑을 하나씩 확인하면서 (케익을 1부터 자르는 것)
    // allToppings의 목록을 하나씩 빼준다.
    allToppings.set(item, allToppings.get(item) - 1);

    // bro에는 토핑의 개수가 중요한게 아니라 토핑의 종류가 중요하므로
    // 들어온 토핑의 종류와 true를 넣어준다.
    brother.set(item, true);

    // allToppings의 토핑이 0이되면 그 토핑 항목을 지워준다.
    if (!allToppings.get(item)) {
      allToppings.delete(item);
    }

    // allToppings의 크기와 brother의 크기가 같으면
    // 형과 동생이 같은 종류의 토핑을 들고있는 것이기에
    // count를 1씩 증가시켜준다.
    if (allToppings.size === brother.size) count++;

    // 동생이 가진 토핑 종류가 많아지면 더 이상 케익을 잘라도 동생의 토핑 개수만 증가하는 것
    // 때문에 break문으로 반복문을 종료시킨다.
    if (allToppings.size < brother.size) break;
  }

  return count;
}

test("run", () => {
  expect(solution([1, 2, 1, 3, 1, 4, 1, 2])).toBe(2);
  expect(solution([1, 2, 3, 1, 4])).toBe(0);
});
