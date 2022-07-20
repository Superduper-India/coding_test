# 완주하지 못한 선수
## 1. 문제
***
### 원하는 것
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성

### 조건
* 단 한 명의 선수를 제외하고 모든 선수가 마라톤을 완주했다.
* 마라톤에 참여한 선수들의 이름이 담긴 배열 participant
* 완주한 선수들의 이름이 담긴 배열 donePlayer

## 2. 계획
0/ participant, donePlayer 배열을 각각 오름차순 정렬한다.
1/ participant에 donePlayer에 해당되지 않는 선수이름을 return하거나
=> participant를 맵으로 돌려서 !donePlayer.includes(n)되는지 확인하고, 해당되면 n을 리턴한다.
2/ participant에서 복수지만 donePlayer에서 단수인 선수가 있으면 그 선수이름을 return한다.
=> participant.filter((n, i, arr) => arr.indexOf(n) !== i));

## 3. 실행
***
## 4. 회고
***

## Sources
***
https://programmers.co.kr/learn/courses/30/lessons/42576