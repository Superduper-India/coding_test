// 220505
// 1. 어떻게 접근하려고 했지?
// 배열에 반복문 돌려서 -, +붙이는 모든 경우의 수 구하기 (순열)
// 순열의 요소의 합이 4일 경우 answer++

// 2. 왜 이렇게 생각해?
// 3. 이게 맞다고 생각하면 더 좋은 방법이 있나?
// 4. 코드에 옮기자.

// 풀이참고 url => https://jjnooys.medium.com/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%83%80%EA%B2%9F-%EB%84%98%EB%B2%84-javascript-1d7983d423b5

function solution(numbers, target) {
  let answer = 0;

  dfs(0, 0);

  function dfs(index, sum) {
    console.log(index);
    if (index === numbers.length) {
      if (sum === target) {
        answer++; console.log("일치!");
      } return console.log("함수끝");
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  return answer;
}
// 목표: 5리턴

console.log(solution([1, 1, 1, 1, 1], 3));
