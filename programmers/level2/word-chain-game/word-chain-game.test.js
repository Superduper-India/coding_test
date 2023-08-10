const solution = (n, words) => {
  let temp = 0;
  let round = 0;

  for (let i = 0; i < words.length; i++) {
    const previousWords = words.slice(0, i);
    const now = words[i];
    const previous = words[i - 1];
    const order = (i % n) + 1;
    // toDo 아래 로직 성립 이유 생각해보기
    round = Math.ceil((i + 1) / n);

    // break하는 조건은 다음과 같다.
    // 1. 현재 단어가 이전에 등장했던 단어인지
    // 2. 현재 단어가 한 글자인지
    // 3. 현재 단어의 첫 글자가 전 단어의 마지막 글자와 일치하지 않을 때
    if (i > 0) {
      if (previousWords.includes(now) || now.length === 1 || now[0] !== previous[previous.length - 1]) {
        temp = order;
        break;
      }
    }
  }

  return !temp ? [0, 0] : [temp, round];
};

test('run', () => {
  expect(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'])).toStrictEqual([3, 3]);
  expect(
    solution(5, [
      'hello',
      'observe',
      'effect',
      'take',
      'either',
      'recognize',
      'encourage',
      'ensure',
      'establish',
      'hang',
      'gather',
      'refer',
      'reference',
      'estimate',
      'executive',
    ])
  ).toStrictEqual([0, 0]);
  expect(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'])).toStrictEqual([1, 3]);
});
