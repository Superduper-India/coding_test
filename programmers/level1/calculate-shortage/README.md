# 부족한 금액 계산하기
## 1. 문제
***
### 원하는 것
놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성.

### 조건
* price는 놀이기구의 원래 이용료입니다.
* money는 자신이 가지고 있는 금액입니다.
* count는 놀이기구를 사용하는 횟수입니다.
* 놀이기구를 N번 째 이용한다면 원래 이용료의 N배를 받습니다.
* 금액이 부족하지 않으면 0을 return.

## 2. 계획
1/ count 만큼 반복문을 돌려서 price*i = totalPrice 할당
2/ totalPrice-money > 0 // answer = totalPrice-money
3/ totalPrice-money <= 0 // answer = 0 

## 3. 실행
***
## 4. 회고
***

## Sources
***
https://school.programmers.co.kr/learn/courses/30/lessons/82612
