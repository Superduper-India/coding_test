function solution(files) {
  // 알파벳 먼저 정렬하고, 그건 고정된 상태로 숫자
  function sorting(a, b) {
    let aNumber = '';
    let bNumber = '';

    for (const char of a) {
      const code = char.charCodeAt() - 48;
      if (code >= 0 && code < 10) {
        aNumber += code;
      }
    }

    for (const char of b) {
      const code = char.charCodeAt() - 48;
      if (code >= 0 && code < 10) {
        bNumber += code;
      }
    }

    return +aNumber - +bNumber;
  }

  return files.sort((a, b) => sorting(a, b));
}

test('run', () => {
  expect(
    solution(['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG']),
  ).toStrictEqual(['img1.png', 'IMG01.GIF', 'img02.png', 'img2.JPG', 'img10.png', 'img12.png']);
  expect(
    solution(['F-5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat']),
  ).toStrictEqual([
    'A-10 Thunderbolt II',
    'B-50 Superfortress',
    'F-5 Freedom Fighter',
    'F-14 Tomcat',
  ]);
});
