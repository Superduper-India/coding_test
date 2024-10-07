// 1. 원하는 것
// 처음 가지고 있는 병사의 수 n, 사용 가능한 무적권의 횟수 k, 매 라운드마다 공격해오는 적의 수가 순서대로 담긴 정수 배열 enemy가 매개변수로 주어질때 무적권을 적절한 시기에 사용하여 진행할 수 있는 라운드의 최댓값을 구하라

// 2. 조건
// - 무적권을 사용하면 병사의 소모없이 한 라운드의 공격을 막을 수 있다.
// - 무적권은 최대 k번 사용할 수 있다.
// - 모든 라운드를 막을 수 있는 경우에는 enemy[i]의 길이를 리턴

// 최대한 많은 라운드를 진행하려면 무적권을 모두 소모하고 남은 라운드의 적의 수를 최소로 만들어야 한다. k번째 라운드까지는 모두 무적권으로 막을 수 있지만 k+1번째 라운드부터 매번 지금까지의 모든 라운드 중 최소한의 적이 등장하는 라운드만을 골라서 무적권을 사용하지 않고 병사로 막는다면 최대한 많은 라운드를 진행할 수 있다.

// 우선순위 큐 힙을 이용하여 구현하기
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  push(value) {
    const heap = this.heap; // 최소 힙
    heap.push(value);
    let index = heap.length - 1; // 힙의 마지막 노드의 인덱스를 구한다.
    let parent = Math.floor((index - 1) / 2); // 부모 노드의 인덱스를 계산한다.

    // 새로운 값이 부모 노드보다 작고, 루트 노드가 아닌 경우 반복문을 실행한다. 루트노드에 도달하면 더 이상 비교가 필요 없으므로 반복을 멈춘다.
    while (index > 0 && heap[index] < heap[parent]) {
      [heap[index], heap[parent]] = [heap[parent], heap[index]]; // 부모 노드와 자식 노드의 값을 스왑한다.
      index = parent; // 인덱스를 부모 노드로 이동시킨다. (다시 그 위의 부모와 비교할 수 있도록)
      parent = Math.floor((index - 1) / 2); // 새로운 부모 노드의 인덱스를 계산한다.
    }
  }

  pop() {
    const heap = this.heap;
    if (heap.length <= 1) return heap.pop();

    const rootNode = heap[0]; // 제거한 루트 노드
    heap[0] = heap.pop(); // 루트 노드를 제거하면서, 동시에 가장 마지막 노드가 루트 노드의 위치에 오도록 한다.
    let index = 0; // 루트 노드 초기화 (하향식으로 내려가려고)

    // 왼쪽 자식 노드가 배열 범위 안에 있을 때만 루프를 반복하기. 배열의 범위를 넘어가면, 더 이상 자식 노드가 없으므로 반복을 멈춘다.
    while (index * 2 + 1 <= heap.length - 1) {
      let left = index * 2 + 1; // 루트 노드의 왼쪽 자식 노드
      let right = index * 2 + 2; // 루트 노드의 오른쪽 자식 노드
      let next = index; // 루트 노드 => 추후에 자리를 바꿔야 할 자식 노드의 인덱스를 저장한다.
      // 부모노드가 자식노드보다 크면, 위치를 바꿔준다.
      if (heap[next] > heap[left]) next = left;

      // 오른쪽 자식 노드가 배열의 범위 내에 있는지 확인한다. 오른쪽 자식 노드가 없는 경우에는 왼쪽 자식과만 비교해야 하기 때문에, 배열의 길이를 넘지 않도록 이 조건이 필요하다.
      // 그리고 부모노드가 자식노드보다 크면, 위치를 바꿔준다.
      if (right <= heap.length - 1 && heap[next] > heap[right]) next = right;

      // next가 여전히 부모 노드의 인덱스를 가리키고 있다면, 자식 노드들과 비교해도 부모 노드가 더 작기 때문에 더 이상 아래로 내려갈 필요가 없다.
      if (next === index) break;

      // 부모 노드와 자식 노드의 값을 스왑한다.
      // 즉, 부모 노드의 값이 자식 노드 보다 클 때, 두 노드의 위치를 바꾼다.
      [heap[index], heap[next]] = [heap[next], heap[index]];
      // 스왑한 후에는 자식 노드로 이동해, 해당 자식 노드에서 다시 힙 속성을 유지해야 하기 때문에 인덱스를 자식 노드로 변경하여 다음 반복에서 다시 비교를 진행한다.
      index = next;
    }

    return rootNode;
  }
}

const solution = (n, k, enemy) => {
  let usedN = 0; // 무적권을 쓰지 않고 얼마나 처리했는지의 합
  if (enemy.length === k) return enemy.length; // 모든 라운드를 막을 수 있는 경우

  // 우선순위 큐를 이용한다.
  const queue = new PriorityQueue();
  enemy.slice(0, k).forEach((v) => queue.push(v)); // 무적권을 사용해서 무조건 통과할 수 있는 최소 라운드
  for (let i = k; i < enemy.length; i++) {
    queue.push(enemy[i]);
    const min = queue.pop();
    usedN += min;
    if (usedN > n) return i;
  }

  return enemy.length; // for문을 다 돌았다면 모든 라운드를 진행할 수 있는 것이므로
};

test('run', () => {
  expect(solution(7, 3, [4, 2, 4, 5, 3, 3, 1])).toBe(5);
  expect(solution(2, 4, [3, 3, 3, 3])).toBe(4);
});
