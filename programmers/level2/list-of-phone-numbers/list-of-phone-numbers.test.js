// 원하는 것
// 전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성

const solution = (phone_book) => {
  let answer = true;

  // 0. 전화번호 길이 중 가장 짧은 요소의 길이만큼만 비교하면됨
  let minLength = 0;

  phone_book.forEach((number) => {
    if (!minLength || number.length < minLength) minLength = number.length;
  });

  // 맵을 활용한다.
  const map = new Map();
  phone_book.forEach((number) => {
    const temp = number.slice(0, minLength);
    map.set(temp, (map.get(temp) || 0) + 1);
  });

  for (const value of map.values()) {
    // 1. 인덱스의 요소가 모두 일치해야한다. ==> false
    // 2. 인덱스와 요소가 모두 일치하지 않는다. ==> true
    if (value > 1) answer = false;
  }

  return answer;
};

test('run', () => {
  expect(solution(['119', '97674223', '1195524421'])).toBe(false);
  expect(solution(['123', '456', '789'])).toBe(true);
  expect(solution(['12', '123', '1235', '567', '88'])).toBe(false);
});
