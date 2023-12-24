// 1. 원하는 것
// 만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수

// 2. 조건
// ▲ - 다음 알파벳
// ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
// ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
// ▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)

// 3. 계획
// (1) 조이스틱의 상,하 이동: A부터 오름차순으로 찾는게 빠른지, Z부터 내림차순으로 찾는게 빠른지 확인하기
// (2) 조이스틱의 좌, 우 이동: 만들고자 하는 문자열이 모두 연속된 A로만 이루어져 있다면 오른쪽으로만 이동하는 것이 최소한의 움직임으로 문자열을 완성시킬 수 있다. 하지만, 그렇지 않을 경우에는 왼쪽으로 이동하는 것이 빠른 경우가 있다. 그래서 좌->우 이동과 우->좌 이동의 횟수를 비교해서 최솟값을 찾아야 한다.

// 주어진 알파벳을 아스키 코드로 변환하는 함수
const changeCharToCode = (char) => {
  return char.charCodeAt();
};

// A의 아스키 코드, Z의 아스키 코드를 해시 테이블 형태로 저장
const codeTable = {
  A: changeCharToCode('A'),
  // 1을 더하는 이유는 A에서 Z로 바꾸기 위해 조이스틱을 조작하는 횟수
  Z: changeCharToCode('Z') + 1,
};

// 현재 알파벳을 아스키 코드로 변환하고,
// 현재 알파벳이 A와 Z중에 어느 것에 가까운지 판단하기 위해서,
// '현재 알파벳 아스키 코드 - A의 아스키 코드' 와 'Z의 아스키 코드 - 현재 알파벳 아스키 코드'중 작은 값을 반환한다.
const countChangingChar = (char) => {
  const currCode = changeCharToCode(char);
  return Math.min(currCode - codeTable['A'], codeTable['Z'] - currCode);
};

const solution = (name) => {
  console.log('A'.charCodeAt(), 'Z'.charCodeAt());
  // 좌->우 이동하는 경우, 최소 이동 횟수
  let minMoveCount = name.length - 1;
  // 다음 문자열이 A인지 확인하기 위한 변수
  let nextIdx = 0;

  const totalCount = [...name].reduce((acc, char, idx) => {
    nextIdx = idx + 1;

    // 연속되는 A의 경우, 마지막 A의 다음 인덱스 구하기
    while (nextIdx < name.length && name.charAt(nextIdx) === 'A') {
      nextIdx++;
    }

    // 2 * idx => 왔던 거리를 되돌아가는 횟수
    // name.length - nextIdx => 다시 A를 만날때까지 이동하는 횟수
    minMoveCount = Math.min(minMoveCount, 2 * idx + (name.length - nextIdx));

    return acc + countChangingChar(char);
  }, 0);

  return totalCount + minMoveCount;
};

test('run', () => {
  expect(solution('JEROEN')).toBe(56);
  expect(solution('JAN')).toBe(23);
});
