// 원하는 것
// 각 손님들이 주문한 단품메뉴들이 문자열 형식으로 담긴 배열 orders, "스카피"가 추가하고 싶어하는 코스요리를 구성하는 단품메뉴들의 갯수가 담긴 배열 course가 매개변수로 주어질 때, "스카피"가 새로 추가하게 될 코스요리의 메뉴 구성을 문자열 형태로 배열에 담아 return 하도록 solution 함수를 완성

// 조건
// 코스요리 메뉴는 최소 2가지 이상의 단품메뉴로 구성
// 최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합에 대해서만 코스요리 메뉴 후보에 포함

// course와 order의 길이가 동일한지 확인
const checkLength = (orderLen, course) => {
  if (course.includes(orderLen)) return true;
  else return false;
};

const solution = (orders, course) => {
  const answer = [];

  // order의 길이 오름차순 순으로 orders정렬
  orders.sort((a, b) => a.length - b.length);

  // console.log(orders);

  // course와 order의 길이가 동일해야한다
  orders.forEach((order, index) => {
    if (checkLength(order.length, course)) {
      // 동일하다면, check++ 해당 요소를 다른 요소들이 포함하고 있는지 검증하여 check++, check가 2이상이여야 answer에 해당 요소를 push한다
      // console.log('target:', [...order]);
      for (let i = index + 1; i < orders.length; i++) {
        [...orders[i]].forEach((letter) => {
          if ([...order].includes(letter)) {
            answer.push(order);
          }
        });
        // console.log(orders[i]);
      }
    }
  });

  return [...new Set(answer)];
};

test('run', () => {
  expect(solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])).toStrictEqual(['AC', 'ACDE', 'BCFG', 'CDE']);
  expect(solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5])).toStrictEqual(['ACD', 'AD', 'ADE', 'CD', 'XYZ']);
  expect(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4])).toStrictEqual(['WX', 'XY']);
});
