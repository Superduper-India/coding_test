# 두 개 뽑아서 더하기
## 1. 문제
***
### 원하는 것
numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성

### 조건
* 정수 배열 numbers가 주어집니다.
* numbers의 모든 수는 0 이상 100 이하입니다.

## 2. 계획
(old)
1/ numbers 배열을 재귀로 numbers.slice(1, len)로써 넘겨준다.

2/ 반복문으로 0번째 인덱스에 1~마지막 인덱스까지의 숫자를 더해서 addUp 배열에 push

3/ addUp배열을 펼침연산자로 각 요소를 new Set()메서드의 인자로 전달함으로써 중복값을 제거한 최종 정답을 리턴한다.

(new)
1/ 나중에 중복값을 제거해줄 new Set()메서드를 변수에 할당해준다.

2/ 이중 for문으로 전, 후 인덱스가 **같지 않을 경우** numbers배열에서 전, 후 인덱스 요소끼리 더해서 1번의 변수에 add해준다.

3/ [...set]을 sort메서드로 오름차순 정렬해준다.

## 3. 실행
***
## 4. 회고
***

## Sources
***
https://school.programmers.co.kr/learn/courses/30/lessons/68644
