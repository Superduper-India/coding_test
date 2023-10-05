// 원하는 것
// 택배 기사님이 원하는 상자 순서를 나타내는 정수 배열 order가 주어졌을 때, 영재가 몇 개의 상자를 실을 수 있는지 return 하는 solution 함수를 완성

// 조건
// 1. 1번 상자부터 n번 상자까지 번호가 증가하는 순서대로 놓여있으며, 순서대로(1번 상자부터) 상자를 내릴 수 있다. (큐 - 선입선출)
// 2. 하지만 택배 기사님이 알려준 순서대로 트럭에 실어야한다.
// 3. 순서가 아닌 상자를 보조 컨테이너 벨트에 보관하는데, 여기서는 가장 마지막의 상자부터 꺼낸다 (스택 - 후입선출)
// 4. 보조 컨테이너 벨트를 사용해도 택배 기사님이 알려준 순서대로 상자를 싣지 못 한다면, 더 이상 상자를 싣지 않는다.

const solution = (order) => {
  let answer = 0;

  // 컨테이너 벨트:  큐 => 가장 처음 요소 꺼낼 수 있음
  // order를 얕은복사하여 오름차순으로 정렬한다
  const queue = [...order].sort();
  // 보조 컨테이너 벨트: 스택 => 가장 마지막 요소 꺼낼 수 있음
  const stack = [];

  let i = 0;

  // stack의 길이가 0이 되면 반복문을 멈춘다.

  // i 는 order.length보다 작은 조건에 반복문을 진행한다.
  while (i < order.length) {
    // 컨테이너 벨트에 현재 순서가 맞지않음
    if (queue[i] !== order[i]) {
      // 보조 컨테이너 벨트(stack)에 싣는다.
      // queue의 i 요소와 order의 i 요소를 비교하여 일치하지 않으면 queue에서 shift하고, stack에 push한다.
      const temp = queue.shift();
      stack.push(temp);
    }
    if (queue[i] === order[i]) {
      // 컨테이너 벨트 순서가 맞음
      // answer++하고, i++ 하여 다음 요소와 비교한다.
      queue.shift();
      answer++;
      i++;
    }
    if (stack[stack.length - 1] === order[i]) {
      // 보조 컨테이너 벨트(stack)에서 꺼낸다. pop()한 요소와 order의 i요소와 비교하여 일치하면 answer++하고, i++하여 다음 요소와 비교한다.
      stack.pop();
      answer++;
      i++;
      break;
    }

    // if (stack[stack.length - 1] !== order[i] && queue[i] !== order[i]) {
    //   // 보조 컨테이너 벨트(stack)와 컨테이너 벨트(queue)에 일치하는 요소가 없으면 반복문을 멈춘다.
    //   break;
    // }
  }

  console.log('컨테이너 벨트, 가장 처음 요소 꺼낼 수 있음', queue);
  console.log('보조 컨테이너 벨트, 가장 마지막 요소 꺼낼 수 있음', stack);
  console.log('순서', order, answer);

  return answer;
};

test('run', () => {
  expect(solution([4, 3, 1, 2, 5])).toBe(2);
  expect(solution([5, 4, 3, 2, 1])).toBe(5);
});
