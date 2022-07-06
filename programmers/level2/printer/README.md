# 프린터
## 1. 문제
***
### 원하는 것
현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성

### 조건
1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
<br />
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
<br />
3. 그렇지 않으면 J를 인쇄합니다.
<br />
4. 인쇄 작업의 중요도는 1~9로 표현하며 **숫자가 클수록** 중요하다는 뜻입니다.
<br />
5. location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.

## 2. 계획
실행 가능한 계획
그리고 문제에서 하라는 대로



1/ priorities[location] 값보다 큰값이 priorities에 있으면 priorities[location].splice(location, length-1)로써 가장 마지막 인덱스로 옮기기
2/ priorities[location]이 가장 크면 answer배열에 push
3/ answer.indexOf(priorities[location]) 구하기

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
