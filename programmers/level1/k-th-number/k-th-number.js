// 220502
// 1. 어떻게 접근하려고 했지? 
// (1) commands에 forEach반복문을 적용한다.
// (1)을 활용해서 arr을 조작한다.
// 2. 왜 이렇게 생각해?
// 3. 이게 맞다고 생각하면 더 좋은 방법이 있나?
// 4. 코드에 옮기자.

// 참고 url => https://1coding.tistory.com/167

function solution(array, commands) {
  let result = [];
  for (const item of commands) {
    const numberArr = array.slice(item[0] - 1, item[1]).sort();
    result.push(numberArr[item[2] - 1]);
  }
  return result;
}

const arr = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
solution(arr, commands);
