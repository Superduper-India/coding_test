// 원하는 것
// 선행 스킬 순서 skill과 유저들이 만든 스킬트리를 담은 배열 skill_trees가 매개변수로 주어질 때, 가능한 스킬트리 개수를 return 하는 solution 함수를 작성

// 조건
// 선행 스킬: 어떤 스킬을 배우기 전에 먼저 배워야 한다.
// 그 외 스킬: 순서에 상관없이 배울 수 있다.

// 계획

const solution = (skill, skill_trees) => {
  let answer = 0;
  const targetArr = [];

  skill_trees.forEach((item) => {
    let temp = '';
    for (let i = 0; i < item.length; i++) {
      if ([...skill].includes(item[i])) temp += item[i];
    }
    targetArr.push(temp);
  });

  targetArr.forEach((target) => {
    let check = true;
    for (let i = 0; i < target.length; i++) {
      if (target[i] !== skill[i]) check = false;
    }

    if (check) answer++;
  });

  return answer;
};

test('run', () => {
  expect(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'])).toBe(2);
});
