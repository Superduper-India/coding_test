# H-index
## 1. 문제
***
### 원하는 것
어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성

### 조건
* 배열 citations의 길이가 발표한 논문의 수(n)이다.
* h번 이상, h번 이하 인용된 논문 => H-Index는 h이다.

## 2. 계획
1/ 배열 citations를 내림차순으로 정렬한다.
2/ 1에서 정렬된 citations에서 index+1>citation(요소)인 요소를 찾는다.
3/ citations.indexOf(2번에서 반환된 요소) 해준다.

## 3. 실행
***
## 4. 회고
***
어떻게하면 더 효율적으로 풀까?
어떻게하면 더 효과적으로 풀까?
어디에 써먹을까?

## Sources
***
https://school.programmers.co.kr/learn/courses/30/lessons/42747
