// 10진수를 2진수로 변환한다.
const converseToBinary = (decimal) => {
  return decimal.toString(2);
};

const solution = (s) => {
  let zeroCount = 0;
  let binaryCount = 1;

  while (s.length > 0) {
    if (s === '1') break;

    if (s.includes('0')) {
      // 0의 개수를 센다.
      const count = (s.match(/0/g) || []).length;
      zeroCount = zeroCount + count;

      s = s.match(/1/g).join('');
    } else {
      binaryCount = binaryCount + 1;

      // 이진변환
      s = converseToBinary(s.length);
    }
  }

  return [binaryCount, zeroCount];
};

test('run', () => {
  expect(solution('110010101001')).toEqual([3, 8]);
  expect(solution('01110')).toEqual([3, 3]);
  expect(solution('1111111')).toEqual([4, 1]);
});
