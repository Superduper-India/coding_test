// "HH:MM"을 분단위로 바꿔주는 로직
const makeMinStamp = (time) => {
  const [hour, min] = time.split(":").map((v) => Number(v));
  return hour * 60 + min;
};

const solution = (book_time) => {
  // "23:59"인 이유는 예약시간이 자정을 넘어가는 경우는 없기 때문에
  // 10을 더하는 이유는 10분간 청소를 해야하기 때문에
  const timeArr = Array.from({ length: makeMinStamp("23:59") + 10 }, () => 0);

  book_time.forEach(([startTime, endTime]) => {
    // 대실 시작 시간을 분단위로
    let start = makeMinStamp(startTime);
    // 대실 종료 시간을 분단위로
    // 왜 +9를 하는거지? (이것도 청소를 해야해서??)
    const end = makeMinStamp(endTime) + 9;

    for (start; start <= end; start++) {
      timeArr[start]++;
    }
  });

  return Math.max(...timeArr);
};

test("run", () => {
  // expect(
  //   solution([
  //     ["15:00", "17:00"],
  //     ["16:40", "18:20"],
  //     ["14:20", "15:20"],
  //     ["14:10", "19:20"],
  //     ["18:20", "21:20"],
  //   ])
  // ).toBe(3);
  expect(
    solution([
      ["09:10", "10:10"],
      ["10:20", "12:20"],
    ])
  ).toBe(1);
  // expect(
  //   solution([
  //     ["10:20", "12:30"],
  //     ["10:20", "12:30"],
  //     ["10:20", "12:30"],
  //   ])
  // ).toBe(3);
});
