# 없는 숫자 더하기
## 1. 문제
***
### 원하는 것
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성

### 조건
1/ 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers <br />
2/ numbers의 모든 원소는 서로 다릅니다.

## 2. 계획
***
이것은 해시인가??

let answer = 0;
const fullNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 맹글어준다.
const sortedNumber = fullNumbers.filter(number => !numbers(number)) 으로 numbers에 없는 숫자만 남긴다.
sortedNumber를 map으로 돌려서 answer = answer + number 해준다.

## 3. 실행
***
## 4. 회고
***
## Sources
***
https://programmers.co.kr/learn/courses/30/lessons/86051
