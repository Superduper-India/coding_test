# 가장 큰 수 
## 1. 문제
***
### 원하는 것
0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성

### 조건

## 2. 계획
1/ numbers배열을 map메서드로 각 요소에 +""을 해서 숫자를 문자로 만든다.
2/ numbers.sort((a,b) => (b+a)-(a+b))해줘서 가장 큰 수가 구해지도록 numbers배열을 정렬한다.
3/ 큰 수가 나오도록 최종 sort된 배열을 .join(""); 해줘서 정답이 리턴되도록 마무리해준다.

## 3. 실행
***
## 4. 회고
***

## Sources
***
https://programmers.co.kr/learn/courses/30/lessons/42746
