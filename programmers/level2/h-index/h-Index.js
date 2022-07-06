// 220503
// 1. 어떻게 접근하려고 했지? 
// 배열의 요소중 중간값을 구하자 JavaScript Median Function (x)
// 2. 왜 이렇게 생각해?
// 3. 이게 맞다고 생각하면 더 좋은 방법이 있나?
// 4. 코드에 옮기자.

// 참고 url => https://laycoder.tistory.com/211

function solution(citations) {
  const sortArr = citations.sort((a, b) => b - a);

  /* let answers = 0;
  for (let i = 0; i < sortArr.length; i++) {
    if (i < sortArr[i]) {
      answers++;
    }
  }
  return answers; */

  let i = 0;
  while (i + 1 <= sortArr[i]) {
    i++;
  }
  return i;
}

// 타겟: 결과값 3나와야함

console.log(solution([3, 0, 6, 1, 5]));
