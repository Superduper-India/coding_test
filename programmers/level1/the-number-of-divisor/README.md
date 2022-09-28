# 약수의 개수와 덧셈
## 1. 문제
***
### 원하는 것
약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성

### 조건
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중 약수구하기

## 2. 계획
1/ left~right 까지의 약수의 개수를 각각 세기 위해서 countArr을 설정한다. </br>
2/ left~right 까지의 숫자를 돌리는 while반복문을 만든다. </br>
3/ number를 인수로 getDivisor함수를 호출한다. (함수에서 약수구하기) </br>
4/ count, targetNumber를 인수로 carculator함수를 호출한다. (count가 짝수면 +, 홀수면 - 붙여서 결과값 구하기) </br>

## 3. 실행
***
## 4. 회고
***

## Sources
***
https://programmers.co.kr/learn/courses/30/lessons/77884
