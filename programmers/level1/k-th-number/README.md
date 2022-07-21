# K번째수
## 1. 문제
***
### 원하는 것
배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성

### 조건
* i~j까지의 숫자를 오름차순 정렬하고 k번째 숫자를 고릅니다.

## 2. 계획
1/ commands를 map으로 순회해서 arr.slice(command[0]-1, command[1])로 결과값을 구하고 오름차순한다.
2/ 1번에서 나온 배열[command[2]-1]을 구한다.

## 3. 실행
***
## 4. 회고
***
어떻게하면 더 효율적으로 풀까?
어떻게하면 더 효과적으로 풀까?
어디에 써먹을까?

## Sources
***
https://school.programmers.co.kr/learn/courses/30/lessons/42748
