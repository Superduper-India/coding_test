// 원하는 것
// 문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성

// 조건

// 계획
//선택 절차(Selection Procedure): 현재 상태에서의 최적의 해답을 선택한다.
// 적절성 검사(Feasibility Check): 선택된 해가 문제의 조건을 만족하는지 검사한다.
// 해답 검사(Solution Check): 원래의 문제가 해결되었는지 검사하고, 해결되지 않았다면 선택 절차로 돌아가 위의 과정을 반복한다.

const solution = (number, k) => {
  // 0123
  // 23 => 13 => 12 => 03 => 02 => 01

  const arr = [];

  for (let i = k; i >= 0; i--) {
    for (let j = number.length - 1; j >= 0; j--) {
      console.log('i', i, 'j', j);
      if (i === j) break;
      else {
        arr.push(+(number[i] + number[j]));
      }
    }
  }

  return String(Math.max(...arr));
};

test('run', () => {
  expect(solution('1924', 2)).toBe('94');
  expect(solution('1231234', 3)).toBe('3234');
  expect(solution('4177252841', 4)).toBe('775841');
});
