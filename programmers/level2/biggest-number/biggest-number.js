// 220502
// 1. 어떻게 접근하려고 했지?
// 배열내 요소에 접근해서 조합하는 함수를 만들어준다..?
// 2. 왜 이렇게 생각해?
// 3. 이게 맞다고 생각하면 더 좋은 방법이 있나?
// 4. 코드에 옮기자.

// 참고 url1: 문제풀이 
// => https://kimyang-sun.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%80%EC%9E%A5-%ED%81%B0-%EC%88%98-kimyang-sun
// 참고 url2: sort함수 매커니즘 
// => https://noirstar.tistory.com/359

function solution(numbers) {
  let string = numbers.map(num => num + "");
  const answer = string.sort((a, b) => (b + a) - (a + b)).join("");
  return answer[0] === "0" ? "0" : answer;
}

const numbers = [0, 3, 9];
solution(numbers);
