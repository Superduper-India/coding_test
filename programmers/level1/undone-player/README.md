# 완주하지 못한 선수
## 1. 문제
***
### 원하는 것
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성

### 조건
* 단 한 명의 선수를 제외하고 모든 선수가 마라톤을 완주했다.
* 마라톤에 참여한 선수들의 이름이 담긴 배열 participant
* 완주한 선수들의 이름이 담긴 배열 completion

## 2. 계획
* 우선 participant, completion을 각각 오름차순정렬한다.
* participant를 forEach로 순회해서 p !== completion[i]이면 p를 return하게 한다.

## 3. 실행
***
## 4. 회고
***

## Sources
***
https://programmers.co.kr/learn/courses/30/lessons/42576