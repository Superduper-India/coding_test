# 3진법 뒤집기
## 1. 문제
***
### 원하는 것
n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성

### 조건

## 2. 계획
n(10진법) -> n(3진법) -> 앞뒤 반전(3진법) -> 10진법
n.toString(3).split("").reverse().join("")
최종적으로 const answer = parseInt(n, 3)

## 3. 실행
***
## 4. 회고
***

## Sources
***
https://programmers.co.kr/learn/courses/30/lessons/68935
