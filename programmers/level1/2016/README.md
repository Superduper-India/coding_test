# 2016
## 1. 문제
***
### 원하는 것
* 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성

### 조건
* 요일의 이름은 일요일부터 토요일까지 각각 `SUN,MON,TUE,WED,THU,FRI,SAT` 이다.

## 2. 계획
* 요일의 이름이 담긴 arr을 만든다. 요소는 문자열이다.
* new Date(year, month, date)객체에 month=(a-1), date=b 를 각각 넣어서 반환되는 값을 date에 저장한다.
* date.getDay()메서드로 요일을 반환한다. day에 저장한다.
* return arr.find((i, index) => index === day)

## 3. 실행
***
## 4. 회고
***

## Sources
***
https://programmers.co.kr/learn/courses/30/lessons/12901
