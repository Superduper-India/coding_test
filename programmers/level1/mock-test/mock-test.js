// 220503
// 1. 어떻게 접근하려고 했지?
// 배열안에 삼인방의 찍는 방식대로 배열을 담는다.
// 반복문으로 정답 배열과 삼인방찍는방식 배열을 비교해서 일치할때마다 answer배열요소를 1씩 증가시킨다.??
// 2. 왜 이렇게 생각해?
// 3. 이게 맞다고 생각하면 더 좋은 방법이 있나?
// 4. 코드에 옮기자.

// 풀이참고 url => https://laycoder.tistory.com/201
// 이항연산자 mdn => https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators
// 자바스크립트 나눗셈에서 몫과 나머지 구하기
// => http://blog.cloudsys.co.kr/javascript-division-result-remainder/

function solution(answers) {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let answer = [];

  let countArr = [];
  // step1 - 누가 많이 맞췄나 알아보기
  const arr1CountAnswer = answers.filter((number, i) =>
    number === arr1[i % arr1.length]
  ).length;
  const arr2CountAnswer = answers.filter((number, i) =>
    number === arr2[i % arr2.length]
  ).length;
  const arr3CountAnswer = answers.filter((number, i) =>
    number === arr3[i % arr3.length]
  ).length;
  countArr.push(arr1CountAnswer, arr2CountAnswer, arr3CountAnswer);

  // step2 - countArr 중에 가장 높은 수 찾기
  const max = Math.max(...countArr);

  // step3 - max와 counterArr 요소 비교해서 같으면 정답배열에 푸쉬하기
  if (max === countArr[0]) answer.push(1);
  if (max === countArr[1]) answer.push(2);
  if (max === countArr[2]) answer.push(3);

  return answer;
}
// 목표 [1] 리턴

console.log(solution(
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
));
