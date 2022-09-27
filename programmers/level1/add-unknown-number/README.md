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
1/ numbers를 오름차순으로 정렬한다.<br />
2/ unknownNumbers = [0~9].filter(number => !numbers.includes(number))
<br />
3/ unknownNumbers.reduce((sum, currValue) => {
  return sum + currValue;
}, 0);

## 3. 실행
***
## 4. 회고
***
## Sources
***
https://programmers.co.kr/learn/courses/30/lessons/86051
