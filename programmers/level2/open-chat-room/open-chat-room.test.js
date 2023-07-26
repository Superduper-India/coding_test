const solution = (record) => {
  // 고유 유저 아이디를 키로, 해당하는 닉네임 값으로
  const obj = {};
  record.forEach((string) => {
    const stringArr = string.split(' ');
    if (stringArr[0] === 'Enter' || stringArr[0] === 'Change') obj[stringArr[1]] = stringArr[2];
  });

  const result = record
    .map((string) => {
      const stringArr = string.split(' ');
      // 키워드가 Change인 경우, 무시
      if (stringArr[0] === 'Enter') {
        return `${obj[stringArr[1]]}님이 들어왔습니다.`;
      } else if (stringArr[0] === 'Leave') {
        return `${obj[stringArr[1]]}님이 나갔습니다.`;
      }
    })
    .filter((item) => item);

  return result;
};

test('run', () => {
  expect(
    solution(['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan'])
  ).toStrictEqual(['Prodo님이 들어왔습니다.', 'Ryan님이 들어왔습니다.', 'Prodo님이 나갔습니다.', 'Prodo님이 들어왔습니다.']);
});
