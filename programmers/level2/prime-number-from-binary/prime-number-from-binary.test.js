// k진수를 10진수로 변환해주는 함수
makeDecimal = (targetNumber, k) => {
  return parseInt(targetNumber, k);
};
// 10진수를 k진수로 변환해주는 함수
makeBiany = (targetNumber, k) => {
  return targetNumber.toString(k);
};

// 소수인지 판별하는 함수
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
  // 1. 10진법을 k진법으로 변환하는 함수를 호출한다.
  const biany = makeBiany(n, k);

  // 2. 숫자들중에 0을 기준으로 나눈 배열을 만든다.
  const temp = biany.split("0").map((num) => +num);
  // 3. 배열을 순회해서 각 요소가 소수인지 판별한다.
  temp.forEach((number, index) => {
    if (isPrime(number)) {
      console.log("소수다", index, String(number).length);
    } else console.log("소수가 아니다", index);
    // 4. 요소가 소수이면 조건 1~4까지를 판별한다.
    // 그러려면 ['211', '0', '2', '0', '1', '0', '1', '0', '11']이렇게 해서 위치를 구해야할듯
  });
};

test("run", () => {
  expect(solution(437674, 3)).toBe(3);
  expect(solution(110011, 10)).toBe(2);
});
