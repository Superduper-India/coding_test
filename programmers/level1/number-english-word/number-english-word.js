// 220427
// 1. 어떻게 접근하려고 했지? -> 정규식을 사용해야할 것 같다.
// 2. 왜 이렇게 생각해?
// 3. 이게 맞다고 생각하면 더 좋은 방법이 있나?
// 4. 코드에 옮기자.

// 참고: https://velog.io/@leeeunbin/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%88%AB%EC%9E%90-%EB%AC%B8%EC%9E%90%EC%97%B4%EA%B3%BC-%EC%98%81%EB%8B%A8%EC%96%B4-JavaScript

function solution(s) {
  s = s.replace(/zero/gi, "0");
  s = s.replace(/one/gi, "1");
  s = s.replace(/two/gi, "2");
  s = s.replace(/three/gi, "3");
  s = s.replace(/four/gi, "4");
  s = s.replace(/five/gi, "5");
  s = s.replace(/six/gi, "6");
  s = s.replace(/seven/gi, "7");
  s = s.replace(/eight/gi, "8");
  s = s.replace(/nine/gi, "9");
  const result = s;
  console.log(result);
}

const s = "one4seveneight";
solution(s);
