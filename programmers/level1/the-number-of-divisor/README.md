# 약수의 개수와 덧셈
## 1. 문제
***
### 원하는 것
약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성

### 조건
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중 약수구하기

## 2. 계획
left가 13, right가 17일 때, 13~17까지의 모든 수들 중..이니까
for(let i = 1; i <= right-left; i++) 하고,
let number = left+i 가 약수 찾기 원하는 수가 된다.
let index = 1, let newArr = []지정해준다.
그 이후 약수구하는 식 작성하고, 모든 약수를 []에 푸쉬, 길이를 구한다.
길이가 짝수면 += number, 홀수면 -= number 해준다.

## 3. 실행
***
## 4. 회고
***

## Sources
***
https://programmers.co.kr/learn/courses/30/lessons/77884