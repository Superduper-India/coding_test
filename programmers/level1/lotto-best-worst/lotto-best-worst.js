// 220423
// 1. 어떻게 접근하려고 했지? 
// 최고순위와 최저순위를 구해야한다.
// step1. lottos중 win_nums에 포함되는 당첨번호 개수의 길이 correct에 저장
// step2. lottos중 0의 개수의 길이 zeros에 저장
// 최저순위 7-(correct), 최고순위는 7-(correct+zeros)

// 2. 왜 이렇게 생각해?
// 3. 이게 맞다고 생각하면 더 좋은 방법이 있나?
// 4. 코드에 옮기자.

// 풀이참고: https://velog.io/@ypyp66/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%A1%9C%EB%98%90%EC%9D%98-%EC%B5%9C%EA%B3%A0-%EC%88%9C%EC%9C%84%EC%99%80-%EC%B5%9C%EC%A0%80-%EC%88%9C%EC%9C%84-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8

/* function solution(lottos, win_nums) {
  const correct = lottos.filter(num => win_nums.includes(num)).length;
  const zeros = lottos.filter(num => num == 0).length;
  const minRank = 7 - correct >= 6 ? 6 : 7 - correct;// 최저순위
  // console.log(minRank);
  const maxRank =
    minRank - zeros == 0
      || minRank - zeros == 7
      ? 1 : minRank - zeros;
  // console.log(maxRank);
  const result = [maxRank, minRank];
  return result;
}

const lottos = [45, 4, 35, 20, 3, 9]; // 내가 고른 번호
const win_nums = [20, 9, 3, 45, 4, 35]; // 당첨번호
const result = solution(lottos, win_nums);
console.log(result); */

// 220510
// 1. 어떻게 접근하려고 했지? 
// 2. 왜 이렇게 생각해?
// 3. 이게 맞다고 생각하면 더 좋은 방법이 있나?
// 4. 코드에 옮기자.

// 풀이참고:

function solution(lottos, win_nums) {
  const ranks = [6, 5, 4, 3, 2, 1]; // 인덱스값 활용하기
  let topRank = 0;
  let bttmRank = 0;

  const winNumsCount = lottos.filter(num =>
    win_nums.includes(num)).length;
  const zeroNumsCount = lottos.filter(num =>
    num == 0).length;

  for (let i = 0; i < ranks.length; i++) {
    if (ranks[i] == winNumsCount + zeroNumsCount) {
      topRank = i + 1;
    }
    if (ranks[i] == zeroNumsCount) {
      bttmRank = i + 1;
    }
  }

  return [topRank, bttmRank];
}
// 목표 결과값 [3, 5] 리턴하도록...

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
