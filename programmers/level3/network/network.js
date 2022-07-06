// 220507
// 1. 어떻게 접근하려고 했지?
// 2. 왜 이렇게 생각해?
// 3. 이게 맞다고 생각하면 더 좋은 방법이 있나?
// 4. 코드에 옮기자.

// 풀이참고 url => https://yong-nyong.tistory.com/22

function solution(n, computers) {
  let answer = 0;
  const length = computers.length; //3
  const visited = Array.from({ length: n }, () => false);

  function dfs(index) {
    visited[index] = true;

    for (let i = 0; i < length; i++) {
      if (computers[index][i] && !visited[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < length; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}
// 목표: 2를 리턴하게...

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
