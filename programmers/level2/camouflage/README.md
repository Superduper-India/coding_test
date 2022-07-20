# 위장
## 1. 문제
***
### 원하는 것
스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성

### 조건
* clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
* 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
* 같은 이름을 가진 의상은 존재하지 않습니다.
* clothes의 모든 원소는 문자열로 이루어져 있습니다.
* 스파이는 하루에 최소 한 개의 의상은 입습니다.

## 2. 계획
1/ 빈객체 categorizedClothes를 만들고, 다차원(2차원) 배열 clothes을 map으로 순회하여 cloth[1]를 categorizedClothes의 키값으로, 빈배열을 value값으로 추가한다.
2/ clothes을 한 번 더 순회하여 cloth[0]이 빈배열에 추가되지 않았다면, 빈배열에 cloth[0]을 푸쉬해준다.
3/ categorizedClothes 의 키값의 개수 + value값의 배열길이를 모두 더하면 된다???

## 3. 실행
***
## 4. 회고
***

## Sources
***
https://school.programmers.co.kr/learn/courses/30/lessons/42578
