// 원하는 것
// 선행 스킬 순서 skill과 유저들이 만든 스킬트리를 담은 배열 skill_trees가 매개변수로 주어질 때, 가능한 스킬트리 개수를 return 하는 solution 함수를 작성

// 조건
// 선행 스킬: 어떤 스킬을 배우기 전에 먼저 배워야 한다.
// 그 외 스킬: 순서에 상관없이 배울 수 있다.

// 계획

const solution = (skill, skill_trees) => {
  let answer = 0;

  // [...skill]과 skill_trees의 요소들의 인덱스를 비교한다
  skill_trees.forEach((target) => {
    const targetArr = [];
    // target이 c, b, d 중에 해당되는 것이 있으면, targetArr에 푸쉬
    [...target].forEach((letter) => {
      if ([...skill].includes(letter)) targetArr.push(letter);
    });

    let check = false;

    // 각 인덱스의 요소를 비교한다 하나라도 다르면 break, 그게 아니면 answer++;
    for (let i = 0; i < targetArr.length; i++) {
      if (targetArr.indexOf([...skill][i]) !== i) {
        break;
      }
      check = true;
    }

    if (check) answer++;

    console.log('얘네의 순서를 비교한다', [...skill], targetArr, check);
  });

  return answer;
};

test('run', () => {
  expect(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'])).toBe(2);
});
