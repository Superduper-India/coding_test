// 원하는 것
// storey층에서 엘리베이터를 타고 0층으로 내려가는데 필요한 마법의 돌의 최소 개수

// 조건
// - 엘베 버튼은 -1, +1, -10, +10, -100, +100 정수가 적힘
// - 마법의 엘리베이터의 버튼을 누르면 현재 층 수의 버튼에 적혀 있는 값을 더한 층으로 이동함
// - 단, 엘베가 위치해 있는 층과 버튼의 값을 더한 결과가 0보다 작으면 엘리베이터는 움직이지 않는다.
// - 엘베를 움직이기 위해 버튼 한 번당 마법의 돌 한 개를 사용하게 된다.

const solution = (storey) => {
  let result = 0

  while (storey) {
    let currentDigit = storey % 10 // 현재 자리수
    let nextDigit = (storey / 10) % 10 // 다음 자리수
    console.log(storey / 10, nextDigit)

    if (currentDigit > 5) { // 5보다 큰 경우
      result += 10 - currentDigit // 결과값에 반영
      storey += 10 // 다음 자리수 +1
      // console.log('5보다 큰 경우', storey)
    } else if (currentDigit === 5) { // 5와 같은 경우
      result += currentDigit // 결과값에 반영
      storey += nextDigit >= 5 ? 10 : 0 // ?? 다음 자리수가 5보다 크면 +1
      // console.log('5랑 같은 경우', storey)
    } else { // 5보다 작은 경우
      result += currentDigit
      // console.log('5보다 작은 경우', result)
    }
    storey = parseInt(storey / 10)  // 자리수를 변경하여 탐색
  }

  return result
};

test('run', () => {
  expect(solution(16)).toBe(6);
  // expect(solution(2554)).toBe(16);
});
