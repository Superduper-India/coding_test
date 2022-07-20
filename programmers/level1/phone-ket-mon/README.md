# 폰켓몬
## 1. 문제
***
### 원하는 것
N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성

### 조건
* 폰켓몬은 종류에 따라 번호를 붙여 구분한다. 따라서 같은 종류의 폰켓몬은 같은 번호를 가지고 있음

## 2. 계획
1/ 주어진 nums.length / 2를 구해서 pickNumber에 할당한다.
2/ uniqueNumbers = [...new Set(nums)].length가 pickNumber보다 크거나 같은 경우, pickNumber값을 리턴한다.
3/ uniqueNumbers가 pickNumbers보다 작은 경우, uniqueNumbers값을 리턴한다.

## 3. 실행
***
## 4. 회고
***

## Sources
***
https://programmers.co.kr/learn/courses/30/lessons/1845
