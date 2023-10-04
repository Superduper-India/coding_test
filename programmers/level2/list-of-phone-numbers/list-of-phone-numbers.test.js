// 원하는 것
// 전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성

const solution = (phone_book) => {
  // 전화번호 접두어를 기준으로 전화번호 목록 정렬
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    // 현재 전화번호 기준으로 다음 전화번호와 접두어만 비교하기
    if (phone_book[i] === phone_book[i + 1].slice(0, phone_book[i].length)) return false;
  }

  return true;
};

test('run', () => {
  expect(solution(['119', '97674223', '1195524421'])).toBe(false);
  expect(solution(['123', '456', '789'])).toBe(true);
  expect(solution(['12', '123', '1235', '567', '88'])).toBe(false);
  expect(solution(['123', '1197', '557713', '11987543'])).toBe(true);
});
