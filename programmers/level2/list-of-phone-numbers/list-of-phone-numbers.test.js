// 원하는 것
// 전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성

// 테스트케이스 15번 실패

const solution = (phone_book) => {
  let answer = true;

  let minLength = 0;
  // 전화번호 길이 기준 전화번호 목록 오름차순 정렬
  phone_book.sort((a, b) => a.length - b.length);
  // 전화번호 길이 중 가장 짧은 요소의 길이만큼만 비교하면됨
  phone_book.forEach((number) => {
    if (!minLength || number.length < minLength) minLength = number.length;
  });

  // 맵을 활용한다.
  const map = new Map();

  phone_book.forEach((number) => {
    const temp = number.slice(0, minLength);

    if (map.get(temp)) {
      // 제일 작은 글자수 만큼 잘랐는데 이미 있음. 있는 경우 비교를 통해 전체가 동일한지 판단
      // 전화번호들 중에 확인하고자하는 전화번호 알아내기
      const target = phone_book.find((_, i) => i === [...map.keys()].indexOf(temp));
      const secTemp = number.slice(0, target.length);

      if (target === secTemp) map.set(temp, map.get(temp) + 1);
    } else {
      // 없으면 그냥 추가
      map.set(temp, (map.get(temp) || 0) + 1);
    }
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
  expect(solution(['123', '1197', '557713', '11987543'])).toBe(true);
});
