// 220423
// 1. 어떻게 접근하려고 했지? -> 뒤에서 4를 뺀 위치를 구한다. 0~위치 까지를 *로 바꾸는 메서드를 적용한다
// 2. 왜 이렇게 생각해?
// 3. 이게 맞다고 생각하면 더 좋은 방법이 있나?
// 4. 코드에 옮기자.

// 풀이참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

function solution(phone_number) {
  const last4Digits = phone_number.slice(-4);
  return last4Digits.padStart(phone_number.length, "*");
}

const phoneNumber = "01033334444";
const result = solution(phoneNumber);
console.log(result);
