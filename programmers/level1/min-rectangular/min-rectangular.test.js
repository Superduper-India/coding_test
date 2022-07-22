function solution(sizes) {
  const sortSizes = sizes.map(size => {
    if (size[0] < size[1]) {
      let temp = size[0];
      size[0] = size[1];
      size[1] = temp;
      return size;
    } else {
      return size;
    }
  });

  const maxW = [];
  const maxH = [];
  sortSizes.forEach(size => {
    const [w, h] = size;
    maxW.push(w);
    maxH.push(h);
  });

  return Math.max(...maxW) * Math.max(...maxH);
}

test("solution", () => {
  expect(solution([[60, 50], [30, 70], [60, 30], [80, 40]])).toBe(4000);
  expect(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])).toBe(120);
  expect(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])).toBe(133);
});
