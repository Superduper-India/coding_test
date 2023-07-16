const solution = (targets) => {
  let result = 0;
  // targets 2차원 배열을 순회해서 요소의 0, 1번 인덱스 사이의 숫자를 포함하는 배열들을 포함하는 2차원 배열을 다시 리턴하도록 한다.
  const newTargets = targets
    .map((target) => {
      const arrLength = target[1] - target[0] + 1;
      const temp = [];
      for (let i = 0; i < arrLength; i++) {
        temp.push(target[0] + i);
      }
      return temp;
    })
    .sort((a, b) => String(b).length - String(a).length);

  // const removeIndex = [];
  // newTargets.forEach((target, index) => {
  //   let count = 0;
  //   for (let i = index; i < newTargets.length; i++) {
  //     // 교집합의 배열
  //     const intersection = target.filter((x) => newTargets[i].includes(x));
  //     // 각 배열에서 2개의 숫자가 공통되면 요격된다. (제외)
  //     if (intersection.length === 2) {
  //       removeIndex.push(i);
  //       count++;
  //     }
  //   }
  //   if (removeIndex.length > 0) {
  //     result++;
  //     const dd = newTargets.filter((_, index) => !removeIndex.includes(index));
  //     console.log(dd, result);
  //   }
  // });

  const self = (arr) => {
    // 기저조건
    if (arr.length === 1) return result++;

    const removeIndex = [];
    for (let i = 0; i < arr.length; i++) {
      // 교집합의 배열
      const intersection = arr[0].filter((x) => arr[i].includes(x));
      console.log(intersection);
      // 각 배열에서 2개의 숫자가 공통되면 요격된다. (제외)
      if (intersection.length === 2) {
        removeIndex.push(i);
      }
    }

    if (removeIndex.length > 0) {
      result++;
    }

    const nextArr = arr.filter((_, index) => !removeIndex.includes(index));
    console.log(nextArr);
    // self(nextArr);
  };

  self(newTargets);

  // 2개의 숫자가 공통되는 배열이 없다면 그냥 result++한다.
};

test('run', () => {
  expect(
    solution([
      [4, 5],
      [4, 8],
      [10, 14],
      [11, 13],
      [5, 12],
      [3, 7],
      [1, 4],
    ])
  ).toBe(3);
});
