// 원하는 것
// 정수 n, left, right가 매개변수로 주어집니다. 주어진 과정대로 만들어진 1차원 배열을 return 하도록 solution 함수를 완성

// 조건
// - n행 n열 크기의 비어있는 2차원 배열의 i = 1,2,3,..,n에 대해서 다음 과정을 반복합니다.
//    - 1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채운다.

// 계획
// i로 좌표를 구하는 방법
// (a,b)
// a = Math.floor(i/n)
// b = i % n;

const solution = (n, left, right) => {
  // n행 n열 크기의 비어있는 2차원 배열을 만든다.
  const arr = Array.from({ length: n }).fill(Array.from({ length: n }));

  // const arr = [
  //   ['2행 1열', '2행 2열', '1행 3열'], // 2행
  //   ['3행 1열', '3행 2열', '1행 3열'], // 3행
  //   ['1행 1열', '1행 2열', '1행 3열'], // 1행
  // ]; //1열      2열       3열

  // 1행 1열부터 i행 i열까지의 영역 내의
  // 모든 빈 칸을 숫자 i로 채우는 로직
  for (let rowI = 0; rowI < arr.length; rowI++) {
    for (let columnI = 0; columnI < arr[rowI].length; columnI++) {
      if (rowI == columnI) {
        // 행과 열이 같으면,
        arr[rowI][columnI] = rowI + 1;
      } else if (rowI > columnI) {
        // 행이 열보다 크면,
        arr[rowI][columnI] = rowI + 1;
      } else {
        // 열이 행보다 크면,
        arr[rowI][columnI] = columnI + 1;
      }
    }
  }

  // 위 로직을 모두 이어붙인 새로운 1차원 배열
  const newArr = arr.flat();

  // left에서 right까지의 인덱스를 담은 배열
  // const newIndex = Array.from({ length: right - 1 }).map((_, i) => {
  //   return left + i;
  // });

  // console.log(newArr.filter((_, i) => newIndex.includes(i)));
};

test('run', () => {
  // expect(solution(3, 2, 5)).toBe([3, 2, 2, 3]);
  expect(solution(4, 7, 14)).toBe([4, 3, 3, 3, 4, 4, 4, 4]);
});
