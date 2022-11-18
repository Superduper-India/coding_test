# 이상한 문자 만들기
## 1. 문제
***
### 원하는 것
* 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성

### 조건
* 문자열 s는 한 개 이상의 단어로 구성
* 각 단어는 하나 이상의 공백문자로 구분

## 2. 계획
* str.split(' ')으로 strArr배열에 각 단어로 담는다.
* strArr.map로 각 요소를 인수로 changeLetter함수를 호출한다.
* changeLetter함수에선 word의 각 letter를 돌려서 letter의 인덱스가 홀수이면 소문자로, 짝수면 대문자로 바꾸어 새로운 단어를 조합한다.
* 새로운 단어가 조합돼서 리턴되면 strArr배열에 담긴다. join(" ")메서드로 배열을 문자열로 다시 합친다.

## 3. 실행
***
## 4. 회고
***

## Sources
***
https://school.programmers.co.kr/learn/courses/30/lessons/12930
