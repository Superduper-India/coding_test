// 원하는 것
// 택배 기사님이 원하는 상자 순서를 나타내는 정수 배열 order가 주어졌을 때, 영재가 몇 개의 상자를 실을 수 있는지 return 하는 solution 함수를 완성

// 조건
// 1. 1번 상자부터 n번 상자까지 번호가 증가하는 순서대로 놓여있으며, 순서대로(1번 상자부터) 상자를 내릴 수 있다.
// 2. 하지만 택배 기사님이 알려준 순서대로 트럭에 실어야한다.
// 3. 순서가 아닌 상자를 보조 컨테이너 벨트에 보관하는데, 여기서는 가장 마지막의 상자부터 꺼낸다 (스택 - 후입선출)
// 4. 보조 컨테이너 벨트를 사용해도 택배 기사님이 알려준 순서대로 상자를 싣지 못 한다면, 더 이상 상자를 싣지 않는다.

const solution = (order) => {
  let answer = 0;

  // 컨테이너 벨트: 반복문 => 가장 처음 요소 꺼낼 수 있음
  // 보조 컨테이너 벨트: 스택 => 가장 마지막 요소 꺼낼 수 있음
  const stack = [];

  let index = 0;

  for (let i = 1; i <= order.length; i++) {
    if (i !== order[index]) {
      // 순서가 맞지않으면,
      // 보조 컨테이너 벨트(stack)에 싣는다. => stack에 push한다.
      stack.push(i);
    } else {
      // 순서가 맞으면, 다음 순서를 비교한다.
      answer++;
      index++;
    }
    // 보조 컨테이너에 아이템이 있고, 마지막 아이템이 일치할때
    while (stack.length !== 0 && stack[stack.length - 1] === order[index]) {
      stack.pop();
      answer++;
      index++;
    }
  }
  // console.log('보조 컨테이너 벨트, 가장 마지막 요소 꺼낼 수 있음', stack);
  // console.log('순서', order, answer);

  return answer;
};

test('run', () => {
  expect(solution([4, 3, 1, 2, 5])).toBe(2);
  expect(solution([5, 4, 3, 2, 1])).toBe(5);
});
