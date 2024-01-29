// 1. 원하는 것
// 만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수

// 2. 조건
// ▲ - 다음 알파벳
// ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
// ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
// ▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)

// 위아래로 이동시 A => Z 오름차순, Z => A 내림차순 어디가 더 가까운지 판단
const charToCode = (targetChar) => {
  const a = targetChar.charCodeAt() - 'A'.charCodeAt();
  const b = 'Z'.charCodeAt() + 1 - targetChar.charCodeAt();
  return Math.min(a, b);
};

const solution = (name) => {
  let upAndDown = 0;
  // 좌우로 이동시 최소 조작횟수
  let leftAndRight = name.length - 1;

  [...name].forEach((char, i) => {
    upAndDown = upAndDown + charToCode(char);

    // 좌우로 이동시 A를 만나면 조이스틱을 조작하지 않는게 낫다.
    // 현재 인덱스의 다음이 A면 돌아가야함
  });

  return upAndDown + leftAndRight;
};

test('run', () => {
  // expect(solution('JEROEN')).toBe(56);
  // expect(solution('JAN')).toBe(23);
  expect(solution('BBBAABB')).toBe(0);
});
