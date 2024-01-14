// 원하는 것
// 예약 시각이 문자열 형태로 담긴 2차원 배열 book_time이 매개변수로 주어질 때, 코니에게 필요한 최소 객실의 수를 return 하는 solution 함수를 완성

// 조건
// - 한 번 사용한 객실은 퇴실 시간을 기준으로 10분간 청소를 하고 다음 손님들이 사용할 수 있다.
// - book_time[i]는 ["HH:MM", "HH:MM"]의 형태로 이루어진 배열이다. ([대실 시작 시각, 대실 종료 시각] 형태)
// - 시각은 HH:MM 형태로 24시간 표기법을 따르며, "00:00" 부터 "23:59" 까지로 주어진다.
//   - 예약 시각이 자정을 넘어가는 경우는 없다.
//   - 시작 시각은 항상 종료 시각보다 빠르다.

const convertTimeToMin = (timeString) => {
  const [hours, mins] = timeString.split(':').map(Number);
  return hours * 60 + mins;
};

const solution = (book_time) => {
  // 일단 문자열 형태로 이루어진 것에서 좌표 타임라인을 만들어야한다
  // 좌표의 길이는 23:59를 min으로 환산한 것이다
  const timeLine = Array.from({ length: convertTimeToMin('23:59') + 10 }).fill(0);

  book_time.forEach((times) => {
    // 시작 인덱스, 끝 인덱스를 구한다.
    const [startTime, endTime] = times;
    const startIndex = convertTimeToMin(startTime);
    const endIndex = convertTimeToMin(endTime) + 9;

    for (let i = startIndex; i <= endIndex; i++) {
      timeLine[i]++;
    }
  });

  return Math.max(...timeLine);
};

test('run', () => {
  expect(
    solution([
      ['15:00', '17:00'],
      ['16:40', '18:20'],
      ['14:20', '15:20'],
      ['14:10', '19:20'],
      ['18:20', '21:20'],
    ])
  ).toBe(3);
  expect(
    solution([
      ['09:10', '10:10'],
      ['10:20', '12:20'],
    ])
  ).toBe(1);
  expect(
    solution([
      ['10:20', '12:30'],
      ['10:20', '12:30'],
      ['10:20', '12:30'],
    ])
  ).toBe(3);
});
