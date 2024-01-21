// 1. 원하는 것
// 만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수

// 2. 조건
// ▲ - 다음 알파벳
// ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
// ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
// ▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)

const changeCharToCode = (char) => {
  // 주어진 알파벳을 유니코드를 변환한다
  // 실제로 이웃하는 알파벳인 A,와 B는 각각 65, 66이다.
  return char.charCodeAt();
};

const codeTable = {
  // A의 아스키 코드, Z의 아스키 코드를 해시 테이블 형태로 저장한다
  A: changeCharToCode('A'),
  // 1을 더하는 이유는 A에서 Z로 바꾸기 위해 조이스틱을 조작하는 횟수
  Z: changeCharToCode('Z') + 1,
};

const checkMinCodeFromChar = (char) => {
  // 현재 알파벳을 아스키 코드로 변환하고, A부터 오름차순으로 찾는 것이 빠른지, Z부터 내림차순으로 찾는 것이 빠른지 판단하여 최소 움직임 횟수(?)를 리턴한다.
  const currCode = changeCharToCode(char);
  return Math.min(currCode - codeTable['A'], codeTable['Z'] - currCode);
};

const solution = (name) => {
  // 최소이동 횟수, 초기값은 왼쪽에서 오른쪽으로만 이동하는 경우이다
  let leastMoveCount = name.length - 1;
  let nextIdx = 0;

  const totalCountUpAndDown = [...name].reduce((acc, currChar, idx) => {
    nextIdx = idx + 1;

    // 현재 인덱스기준 다음 인덱스의 알파벳이 A인 경우 그 다음 인덱스로 넘어간다
    while (nextIdx < name.length && name.charAt(nextIdx) === 'A') {
      nextIdx++;
    }

    console.log('leastMoveCount: ', leastMoveCount, 'idx: ', idx, 'nextIdx: ', nextIdx);

    // 즉, 연속되는 A가 있는 경우엔 마지막 A다음의 알파벳의 인덱스를 알아내서 (전체 길이 - 마지막 A다음의 알파벳의 인덱스)를 해야 거기까지 이동 횟수를 알 수 있다.

    // 좌=>우로만 이동했을때의 횟수와 비교해서 더 작은 값을 할당한다
    leastMoveCount = Math.min(leastMoveCount, 2 * idx + (name.length - nextIdx));

    // 상하로 이동했을때의 횟수를 문자별로 누적시킨다
    return acc + checkMinCodeFromChar(currChar);
  }, 0);

  return totalCountUpAndDown + leastMoveCount;
};

test('run', () => {
  // expect(solution('JEROEN')).toBe(56);
  // expect(solution('JAN')).toBe(23);
  expect(solution('BBBAABB')).toBe(23);
});
