const solution = (maps) => {
  maps.forEach((horizontal, i) => {});
};

test('run', () => {
  expect(solution(['SOOOL', 'XXXXO', 'OOOOO', 'OXXXX', 'OOOOE'])).toBe(16);
  expect(solution(['LOOXS', 'OOOOX', 'OOOOO', 'OOOOO', 'EOOOO'])).toBe(-1);
});
