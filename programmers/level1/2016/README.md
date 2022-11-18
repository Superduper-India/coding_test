# 나누어 떨어지는 숫자 배열
## 1. 문제
***
### 원하는 것
* array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성

### 조건
* 배열을 오름차순으로 정렬해야한다.
* 나누어 떨어지는 원소가 없으면 -1을 리턴해야한다.

## 2. 계획
* arr을 forEach로 돌리고, 산술연산자 중 %을 활용한다. 연산결과가 0이면 arr의 요소를 answer 배열에 push한다.
* answer.length가 0이면 -1을 푸쉬해주고, 그 외의 경우엔 오름차순정렬해준뒤 answer배열을 리턴한다.

## 3. 실행
***
## 4. 회고
***

## Sources
***
https://school.programmers.co.kr/learn/courses/30/lessons/12910?language=javascript
