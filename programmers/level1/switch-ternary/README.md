# 3진법 뒤집기
## 1. 문제
***
### 원하는 것
* n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성

### 조건

## 2. 계획
* n을 `.toString(3)`으로 3진법으로 표현한다. 3진법의 자릿수가 짝수면, `ternaryScale%2===0` 이고, 홀수면 그 반대의 경우다.
* 3진법의 중간을 구해서 위치를 바꾼다.(문제를 잘못이해했다.) 3진법을 `.split("").reverse().join("")`을 사용하여 반대로 뒤집는다.
* 완성된 숫자를 10진법으로 표현하고 리턴한다.
* toString메서드없이 10진법을 3진법으로 바꾸기(done)
* ToDo// parseInt메서드없이 3진법을 10진법으로 바꾸기

## 3. 실행
***
## 4. 회고
***

## Sources
***
https://programmers.co.kr/learn/courses/30/lessons/68935
참고: https://medium.com/web-dev-note/javascript-%EC%A7%84%EB%B2%95-%EB%B3%80%ED%99%98-330694083495
참고2: https://www.boostcourse.org/cs112/lecture/118997?isDesc=false
