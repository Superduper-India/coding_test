# 다리를 지나는 트럭
## 1. 문제
***
### 원하는 것
모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성

### 조건
* bridge_length: 트럭이 최대 올라갈 수 있는 숫자
* weight: 다리가 견딜 수 있는 무게(이하)
* truck_weights: 트럭 별 무게

* index+index...인 경우 다리에 올라가는 순간 각 트럭당 1초 추가하고 시작하고, +bridge_length해준다.
* index하나의 트럭이 다리를 지나가는데 bridge_length초 걸린다.

## 2. 계획
큐(FIFO, 선입선출)로 푼다. shift, push

1/ truck_weights[i-1] + truck_weights[i]가 > weight 이면, second += bridge_length 해주고 truck_weights.shift(); 해준다.
2/ truck_weights[i-1] + truck_weights[i]가 <= weight 이면, second +=2 해주고
truck_weights[i-1] + truck_weights[i]
truck_weights.shift() 두 번 해준다??? 

## 3. 실행
***
## 4. 회고
***
어떻게하면 더 효율적으로 풀까?
어떻게하면 더 효과적으로 풀까?
어디에 써먹을까?

## Sources
***
https://school.programmers.co.kr/learn/courses/30/lessons/42583
