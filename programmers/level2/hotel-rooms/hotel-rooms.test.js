// 인수로 전달받는 "HH:MM"문자열에 대하여 분단위로 변환해주는 convertTimeToMinutes함수.
const convertTimeToMinutes = (timeString) => {
  // "HH:MM" => HH(number) MM(number)로 변환
  const [hours, minutes] = timeString.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes;
  return totalMinutes;
};

const solution = (book_time) => {
  const timeArr = Array.from({
    length: convertTimeToMinutes("23:59") + 10,
  }).fill(0);

  book_time.forEach(([start, end]) => {
    let startMin = convertTimeToMinutes(start);
    // 청소 시간을 고려하여 9를 더한다.
    const endMin = convertTimeToMinutes(end) + 9;

    for (startMin; startMin <= endMin; startMin++) {
      timeArr[startMin]++;
    }
  });

  return Math.max(...timeArr);
};

test("run", () => {
  expect(
    solution([
      ["15:00", "17:00"],
      ["16:40", "18:20"],
      ["14:20", "15:20"],
      ["14:10", "19:20"],
      ["18:20", "21:20"],
    ])
  ).toBe(3);
  expect(
    solution([
      ["09:10", "10:10"],
      ["10:20", "12:20"],
    ])
  ).toBe(1);
  expect(
    solution([
      ["10:20", "12:30"],
      ["10:20", "12:30"],
      ["10:20", "12:30"],
    ])
  ).toBe(3);
});
