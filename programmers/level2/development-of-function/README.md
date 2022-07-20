# 기능개발
## 1. 문제
***
### 원하는 것
각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성

### 조건
* 배열 progresses: 먼저 배포되어야 하는 순서대로 작업의 진도가 정수로 담겼다.
* 배열 speeds: 작업의 개발 속도가 적힌 정수가 담겼다.
* 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발되면 앞에 있는 기능이 배포될 때 함께 배포된다.

## 2. 계획
0/ answer = [], count = 1
1/ 작업이 끝나기까지 남은 일수(leftDays)를 구해야한다... 빈배열 leftDays를 progresses.length만큼의 new Array로 생성하고, fill메서드로 0으로 채워준다.
2/ parseInt((100-progresses[i])/speeds[i]) 해주면 남은 작업일수를 구할 수 있다. 이를 leftDays[i]에 할당한다.
3/ leftDays를 중첩 for문으로 순회해서 i-1(선순위)>=i(후순위) count++한다.
i(선순위)< j(후순위)이면 answer.push(count)뒤 count = 1으로 초기화한다.

## 3. 실행
***
## 4. 회고
***

## Sources
***
https://school.programmers.co.kr/learn/courses/30/lessons/42586
