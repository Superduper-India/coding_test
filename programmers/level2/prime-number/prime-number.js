// 220504
// 1. 어떻게 접근하려고 했지?
// 문자열을 쪼개서 배열요소로 담는다. (펼침연산자)
// 모든 숫자의 경우의 수 구해서 배열에 없는 숫자면 담고, (순열)
// 소수판별해서 참일경우에 배열에 담기 (소수판별)

// 2. 왜 이렇게 생각해?
// 3. 이게 맞다고 생각하면 더 좋은 방법이 있나?
// 4. 코드에 옮기자.

// 풀이참고 url => https://prefer2.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%86%8C%EC%88%98-%EC%B0%BE%EA%B8%B0-level2-js?category=1212180
// 소수란?
// 조건1. 1과 자기 자신만으로 나누어 떨어지는 1보다 큰 양의 정수
// 조건2. n이 소수가 되려면 2보다 크거나 같고, n보다 작은 자연수로 떨어지면 안된다.

// ToDo 1:1매핑 활용해서 문제풀기

function solution(numbers) {
  const numbersArr = [...numbers];
  let answer = [];

  // 소수판별하기
  function isPrime(num) {
    if (num <= 1) return false; // 숫자가 1보다 같거나 작으면 거짓
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 순열만들기
  function getPermutation(arr, fixed) {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newNum = fixed + arr[i];
        const copyArr = [...arr];
        //console.log(copyArr);
        copyArr.splice(i, 1); //인덱스 i로부터 1개 제거 => 1, 7도출
        if (!answer.includes(+newNum) && isPrime(+newNum)) { // newNum이 정답배열에 포함되지 않고, 소수판별함수가 참일경우 
          answer.push(+newNum);
        }
        getPermutation(copyArr, newNum);
      }
    }
  }

  getPermutation(numbersArr, "");
  return answer.length;
}

console.log(solution("17"));
