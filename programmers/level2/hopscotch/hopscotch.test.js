function solution(land) {
  let answer = 0;
  let maxIndex = 0;

  // 시도2 => 반복문, 런타임 에러
  for (let i = 0; i < land.length; i++) {
    let x = land[i];
    // 단, 한 행씩 내려올 때 열에서 maxIndex를 0으로 대체하고 큰값을 찾아야한다.
    if (i > 0) {
      x = String(x)
        .replace(x[maxIndex], 0)
        .split(',')
        .map((item) => +item);
    }
    // 한 행(row)가 시작될 때마다 그 행의 최댓값을 구하여 answer에 누적시켜준다.
    const maxScore = Math.max(...x);
    answer = answer + maxScore;
    maxIndex = x.indexOf(maxScore);
  }

  // 시도1 => 재귀함수, 런타임 에러
  // const self = (land, index, maxIndex) => {
  //   // 한 행씩 내려올 때, row배열에서 maxIndex에 요소를 0으로 대체하기
  //   let row = land[index];
  //   if (index) {
  //     row = String(row)
  //       .replace(row[maxIndex], 0)
  //       .split(',')
  //       .map((item) => +item);
  //   }
  //   // 한 행(row)가 시작될 때마다 그 행의 최댓값을 구한다.
  //   const maxScore = Math.max(...row);
  //   answer = answer + maxScore;
  //   // 기저조건: 마지막 인덱스면 재귀함수 종료
  //   if (index === land.length - 1) return;
  //   // 만약 index가 0이면,(즉 1행부터 땅을 밟으며 한 행씩 내려오므로)

  //   self(land, index + 1, row.indexOf(maxScore));
  // };

  // self(land, 0, 0);

  return answer;
}

test('run', () => {
  expect(
    solution([
      [1, 2, 3, 5],
      [5, 6, 7, 8],
      [4, 3, 2, 1],
    ])
  ).toBe(16);
});
