// 원하는 것
// 각 손님들이 주문한 단품메뉴들이 문자열 형식으로 담긴 배열 orders, "스카피"가 추가하고 싶어하는 코스요리를 구성하는 단품메뉴들의 갯수가 담긴 배열 course가 매개변수로 주어질 때, "스카피"가 새로 추가하게 될 코스요리의 메뉴 구성을 문자열 형태로 배열에 담아 return 하도록 solution 함수를 완성

// 조건
// 코스요리 메뉴는 최소 2가지 이상의 단품메뉴로 구성
// 최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합에 대해서만 코스요리 메뉴 후보에 포함

// 계획
// 조합으로 풀기

// orders에 들어오는 문자열을 course의 수 만큼 뽑아서 조합을 만든다
const combination = (menuArr, num) => {
  const result = [];
  if (num === 1) return menuArr.map((el) => [el]);

  menuArr.forEach((currEl, idx, arr) => {
    // 현재 요소를 제외한 배열
    const restArr = arr.slice(idx + 1);
    const combiArr = combination(restArr, num - 1);
    const combiFix = combiArr.map((el) => [currEl, ...el]);

    result.push(...combiFix);
  });

  return result;
};

const solution = (orders, course) => {
  course.map((num) => {
    orders.forEach((menu) => {
      combination([...menu], num);
      console.log(combination([...menu], num));
    });
  });
};

test('run', () => {
  expect(solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])).toStrictEqual(['AC', 'ACDE', 'BCFG', 'CDE']);
  expect(solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5])).toStrictEqual(['ACD', 'AD', 'ADE', 'CD', 'XYZ']);
  expect(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4])).toStrictEqual(['WX', 'XY']);
});
