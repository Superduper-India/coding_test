// 220507 ToDo 마저 풀기
// 1. 어떻게 접근하려고 했지?
// 2. 왜 이렇게 생각해?
// 3. 이게 맞다고 생각하면 더 좋은 방법이 있나?
// 4. 코드에 옮기자.

// 풀이참고 url => 

function solution(begin, target, words) {
  let answer = 0;
  const length = words.length;
  const visited = Array.from({ length }, () => false);

  function replace(beginArr, wordArr) {
    const oldWord = beginArr.find(i => !wordArr.includes(i));
    const newWord = wordArr.find(i => !beginArr.includes(i));
    const oldIndex = beginArr.findIndex(i => i == oldWord);
    console.log(beginArr.splice(1, 0, 1));
  }

  function dfs(beginArr, wordArr, index) {
    visited[index] = true;

    //console.log(beginArr);
    //console.log(wordArr);
    //console.log(index);
    //wordArr.includes(beginArr);
    beginArr.filter(x => wordArr.includes(x)).length == 2 ?
      replace(beginArr, wordArr) : null
      ;
  }

  for (let i = 0; i < length; i++) {
    if (words.includes(target) && !visited[i]) {
      dfs([...begin], [...words[i]], i);
      answer++;
    } // return answer;
  }

  // return answer;
}
// 목표: 

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
