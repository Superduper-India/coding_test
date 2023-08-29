// k진수를 10진수로 변환해주는 함수
makeDecimal = (targetNumber, k) => {
  return parseInt(targetNumber, k);
};
// 10진수를 k진수로 변환해주는 함수
makeBiany = (targetNumber, k) => {
  return targetNumber.toString(k);
};

// 소수인지 판별하는 함수
// toDo 제곱근까지만 나눠보기
const isPrime = (num) => {
  //1은 소수가 아니다.
  if (num === 1) return false;
  // 1과 자기자신을 제외하고 반복문을 수행하도록 한다.
  for (let i = 2; i < num; i++) {
    //num이 다른 수로 나눠떨어진다면 소수가 아니다.
    if (num % i === 0) return false;
  }
  //반복문을 종료할때까지 if문이 실행되지 않았다면 소수이다.
  return true;
};

const solution = (n, k) => {
  let answer = 0;

  // 1. 10진법을 k진법으로 변환하는 함수를 호출한다.
  const biany = makeBiany(n, k);

  // 2. 숫자들중에 0을 기준으로 나눈 배열을 만든다.
  const temp = biany.split("0");

  const arr = [];
  let string = "";
  biany.split("").forEach((number, index) => {
    if (+number > 0) {
      string = string + number;
    } else {
      arr.push(string);
      string = number;
      arr.push(string);
      string = "";
    }

    if (biany.split("").length - 1 === index) {
      arr.push(string);
    }
  });

  // 3. 배열을 순회해서 각 요소가 소수인지 판별한다.
  arr.forEach((number, index) => {
    if (number != 0) {
      if (isPrime(+number)) {
        // console.log("소수다", number);
        // 4. 요소가 소수이면 조건 1~4까지를 판별한다.
        // (1) 0P0처럼 소수 양쪽에 0이 있는 경우
        if (arr[index - 1] == 0 && arr[index + 1] == 0) answer++;
        // (2) P0처럼 소수 오른쪽에만 0이 있고 왼쪽에는 아무것도 없는 경우
        else if (arr[index - 1] == undefined && arr[index + 1] == 0) answer++;
        // (3) 0P처럼 소수 왼쪽에만 0이 있고 오른쪽에는 아무것도 없는 경우
        else if (arr[index + 1] == undefined && arr[index - 1] == 0) answer++;
        // (4) P처럼 소수 양쪽에 아무것도 없는 경우
      }
      // else console.log("소수가 아니다", number);
    }
  });

  return answer;
};

test("run", () => {
  expect(solution(437674, 3)).toBe(3);
  expect(solution(110011, 10)).toBe(2);
});
