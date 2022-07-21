# 프린터
## 1. 문제
***
### 원하는 것
현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성

### 조건
* 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
* 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
* 그렇지 않으면 J를 인쇄합니다.
* 인쇄 작업의 중요도는 1~9로 표현하며 **숫자가 클수록** 중요하다는 뜻입니다.
* location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.

## 2. 계획
1/ priorities 의 initialLocation을 기록해야한다. 빈 객체인 initialLocation를 파고, priorities를 맵으로 순회해서 initialLocation[index] = priority 로 설정해준다.

2/ priorities를 맵으로 순회하여 priority가 Math.max(...priorities)와 같지 않다면, priorities.shift(priority) => push해준다.

/ initialLocation의 key값이 location에 해당되는 것의 최종 index+1위치를 구하면 되는 것이다~~

## 3. 실행
***
## 4. 회고
***
어떻게하면 더 효율적으로 풀까?
어떻게하면 더 효과적으로 풀까?
어디에 써먹을까?

## Sources
***
https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript
