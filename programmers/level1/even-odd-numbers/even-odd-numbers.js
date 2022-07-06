// 220423
// 1. 어떻게 접근하려고 했지? => 홀,짝을 편명하기 위해서 숫자를 홀,짝으로 나눠본다.
// 2. 왜 이렇게 생각해?
// 3. 이게 맞다고 생각하면 더 좋은 방법이 있나?
// 4. 코드에 옮기자.

function solution(num) {
  if (num % 2 == 0) {
    return alert("짝수입니다");
  }
  if (num % 1 == 0) {
    return alert("홀수입니다");
  }
}

const number = 0; // 아무거나 던지기
const result = solution(number);
console.log(result);

// Top For Next ==> 삼항연산자를 사용하자.
