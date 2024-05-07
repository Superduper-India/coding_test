// 1. 원하는 것
// 만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수

// 2. 조건
// ▲ - 다음 알파벳
// ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
// ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
// ▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)

const table = {
  'A': 'A'.charCodeAt(),
  'Z': 'Z'.charCodeAt() + 1 // Z에 조이스틱이 위치하게 하려면 1번 조작해야한다
}

const getMinCharCode = (targetCharCode) => {
  const BottomUp = table['Z'] - targetCharCode // Z에서 현재 문자열의 코드를 뺀 숫자
  const TopDown = targetCharCode - table['A'] // 현재 문자열의 코드에서 A를 뺀 숫자

  return Math.min(BottomUp, TopDown)
}

const solution = (name) => {
  let answer = 0
  let currIdx = 0
  // 좌우로 움직일때의 최솟값을 구해서 정답에 더한다
  const leftToRight = name.length - 1
  const rightToLeft = (name.length - 1) - name.lastIndexOf('A')

  while (currIdx <= name.length - 1) {
    const currCharCode = name[currIdx].charCodeAt()
    answer += getMinCharCode(currCharCode) // 상하로 움직일때의 최솟값을 구해서 정답에 더한다
    currIdx++ // 다음 idx값
  }

  answer += Math.min(leftToRight, rightToLeft)

  return answer
};

test('run', () => {
  expect(solution('JEROEN')).toBe(56);
  expect(solution('JAN')).toBe(23);
  expect(solution('JAAN')).toBe(23);
  expect(solution('JABN')).toBe(25);
});
