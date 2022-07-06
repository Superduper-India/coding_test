// 220504
// 1. 어떻게 접근하려고 했지?
// 갈색블록개수 + 노란블록개수 = 블록너비(w) * 높이(h)

// 카펫의 최소 높이(h)는 3이다 //그림참고

// 블록의 총 개수(total) = 블록너비(w) * 높이(h) 이므로,
// 노란블록 총 개수(y) = (w-2)*(h-2) //그림참고

// 2. 왜 이렇게 생각해?
// 3. 이게 맞다고 생각하면 더 좋은 방법이 있나?
// 4. 코드에 옮기자.

// 풀이참고 url => https://ghost4551.tistory.com/115

function solution(brownCount, yellowCount) {
  let answer = [];
  const sum = brownCount + yellowCount;
  // === width * height

  for (let height = 3; sum >= height; height++) {
    if (sum % height === 0) { // 토탈 나누어떨어지는 높이일경우
      const width = sum / height; // 같이 해당되는 너비 구하기
      //console.log(width);
      //console.log(height); // 이제 이 중에 주어진 조건(갈색블록이 노란블록을 감싸고있다)을 달성하는 경우를 알아보자.
      if ((width - 2) * (height - 2) === yellowCount) {
        return [width, height];
      }
    }
  }

  return answer;
}
// 목표: [4, 3] 리턴

console.log(solution(10, 2));
