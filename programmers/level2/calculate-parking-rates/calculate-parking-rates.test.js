// 원하는 것
// 차량 번호가 작은 자동차부터 청구할 주차 요금을 차례대로 정수 배열에 담아서 return 하도록 solution 함수를 완성

// 조건
// 주차장의 요금표
// 차량이 입차, 출차 기록
// 차량별로 주차 요금을 계산

// 주차요금을 계산하는 함수
const calcParkingRates = (rate, fees) => {
  const [basicMin, basicFee, unitMin, unitFee] = fees;
  const result = basicFee + Math.ceil((rate - basicMin) / unitMin) * unitFee;
  return result < basicFee ? basicFee : result;
};

// 인수로 전달받는 "HH:MM"문자열에 대하여 분단위로 변환해주는 convertTimeToMinutes함수.
const convertTimeToMinutes = (timeString) => {
  // "HH:MM" => HH(number) MM(number)로 변환
  const [hours, minutes] = timeString.split(':').map(Number);
  const totalMinutes = hours * 60 + minutes;
  return totalMinutes;
};

const solution = (fees, records) => {
  // records를 확인해서 차량 번호에 대한 내역의 개수가 일치하지 않으면 출차기록을 하나 더 추가해준다.

  // 필요한 것: 차량 번호에 따른 누적 주차 시간을 구하기 (맵을 사용)
  const map = new Map();

  records.forEach((record) => {
    const [time, carNum, status] = record.split(' ');
    let min = convertTimeToMinutes(time);
    if (status == 'IN') min = -min;
    map.set(carNum, (map.get(carNum) || 0) + min);
  });

  // 맵의 각 값을 확인해서 음수면 출차된 내역이 없으므로 23:59에 출차된 것으로 간주한다.
  for (let [key, value] of map) {
    const lastMin = convertTimeToMinutes('23:59');
    if (value <= 0) map.set(key, lastMin + value);
  }

  for (let [key, value] of map) {
    map.set(key, calcParkingRates(value, fees));
  }

  // 맵의 키의 값을 오름차순으로 정렬해서 리턴하기
  return [...map]
    .sort((a, b) => {
      return +a[0] - +b[0];
    })
    .map((item) => item[1]);
};

test('run', () => {
  expect(
    solution(
      [180, 5000, 10, 600],
      [
        '05:34 5961 IN',
        '06:00 0000 IN',
        '06:34 0000 OUT',
        '07:59 5961 OUT',
        '07:59 0148 IN',
        '18:59 0000 IN',
        '19:09 0148 OUT',
        '22:59 5961 IN',
        '23:00 5961 OUT',
      ]
    )
  ).toStrictEqual([14600, 34400, 5000]);
  expect(
    solution([120, 0, 60, 591], ['16:00 3961 IN', '16:00 0202 IN', '18:00 3961 OUT', '18:00 0202 OUT', '23:58 3961 IN'])
  ).toStrictEqual([0, 591]);
  expect(solution([1, 461, 1, 10], ['00:00 1234 IN'])).toStrictEqual([14841]);
});
