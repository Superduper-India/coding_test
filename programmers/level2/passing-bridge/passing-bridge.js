// 220215 내 풀이
// 1. 어떻게 접근하려고 했지? => reduce메서드 사용 truck_weights의 항목이 weight보다 작거나 5보다 크면 time은 brige_length가 된다.
// 2. 왜 이렇게 생각해?
// 3. 이게 맞다고 생각하면 더 좋은 방법이 있나?
// 4. 코드에 옮기자.

function solution(bridge_length, weight, truck_weights) {
  // 트럭은 1초에 1 length만큼 전진한다.
  // 트럭 순서는 정해짐
  //console.log(bridge_length); // 다리에 올라갈 수 있는 트럭수 2대
  //console.log(weight); // 다리가 견딜 수 있는 무게 10 (다리에 완전히 오르지 않은 트럭의 무게는 무시)
  //console.log(truck_weights); // 트럭 별 무게 7(1대),4,5(동시에가능),6(1대)
  const answer = truck_weights.reduce((time, truck) => 
    { 
      if (weight >= truck && truck > 5)
        return time + 2;
      
      if (weight >= truck && truck <= 5) {
        return time + 1;
      } 
    }
  , 0);
  console.log(answer);

  return answer; // 모든 트럭이 다리를 건너는데 최소 몇초가 필요할까?
}

solution(2, 10, [7,4,5,6]);
