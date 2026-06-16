// 1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
// 2. words에 있는 단어로만 변환할 수 있습니다.

// bfs??

function isConnected(char1, char2) {
  let count = 0;

  for (let i = 0; i < char1.length; i++) {
    if (char1[i] !== char2[i]) count++; // 철자가 같을경우 count++
  }

  return count === 1 ? true : false;
}
const solution = (begin, target, words) => {
  if (!words.includes(target)) return 0;

  const visited = {};

  const queue = [begin];
  visited[begin] = 0;

  while (queue.length > 0) {
    const word = queue.shift();

    if (word === target) break;

    for (let i = 0; i < words.length; i++) {
      if (isConnected(word, words[i]) && !visited[words[i]]) {
        visited[words[i]] = visited[word] + 1;
        queue.push(words[i]);
      }
    }
  }

  return visited[target] ? visited[target] : 0;
};

test('run', () => {
  expect(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])).toBe(4);
  expect(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])).toBe(0);
});
