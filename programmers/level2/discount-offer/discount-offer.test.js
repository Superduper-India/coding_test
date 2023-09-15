// 원하는 것
// 정현이가 원하는 제품을 나타내는 문자열 배열 want와 정현이가 원하는 제품의 수량을 나타내는 정수 배열 number, XYZ 마트에서 할인하는 제품을 나타내는 문자열 배열 discount가 주어졌을 때, 회원등록시 정현이가 원하는 제품을 모두 할인 받을 수 있는 회원등록 날짜의 총 일수를 return 하는 solution 함수를 완성

// 조건
// - 10일 동안 회원 자격을 부여한다. => 회원이 되면 할인 행사에 참여할 수 있다.
// - 할인하는 제품은 하루에 하나씩만 구매할 수 있다.
// - 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰 회원가입 한다.

const solution = (want, number, discount) => {
  const answer = [];

  // 항목과 개수를 가지고 새로운 맵 객체를 만든다.
  const map = new Map();
  want.forEach((w, i) => {
    if (!map.get(w)) map.set(w, number[i]);
  });
  console.log('dsdasdasd', map);

  // 마지막 할인 가능일자
  const lastDayToDiscount = discount.length - 9;

  // 할인 시작일에 대한 반복문
  for (let i = 0; i < lastDayToDiscount; i++) {
    // 구매항목의 조건을 확인해야 하는 범위
    const condition = discount.slice(i, i + 10);
    console.log('condition', condition);
    // 조건이 일치하면 answer에 i푸쉬하기
  }

  // return answer.length;
};

test('run', () => {
  expect(
    solution(
      ['banana', 'apple', 'rice', 'pork', 'pot'],
      [3, 2, 2, 2, 1],
      [
        'chicken',
        'apple',
        'apple',
        'banana',
        'rice',
        'apple',
        'pork',
        'banana',
        'pork',
        'rice',
        'pot',
        'banana',
        'apple',
        'banana',
      ]
    )
  ).toBe(3);
  expect(
    solution(
      ['apple'],
      [10],
      ['banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana']
    )
  ).toBe(0);
});
