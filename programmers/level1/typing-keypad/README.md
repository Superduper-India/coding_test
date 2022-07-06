# 키패드 누르기
## 1. 문제
***
### 원하는 것
각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

### 조건
1/ 맨 처음 왼손 엄지는 *, 오른손 엄지는 #에서 시작
2/ 엄지는 상하좌우 4가지 방향으로만 이동가능, 키패드 한 칸은 거리로 1
3/ 1,4,7 => 왼손 엄지사용
4/ 3,6,7 => 오른손 엄지사용
5/ 2,5,8,0 두 엄지 중 현재 키패드의 위치에서 더 가까운 엄지사용
5(2)/ 두 엄지의 거리가 같다면 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용

## 2. 계획
let leftThumbPosition = [0,3]
let rightThumbPosition = [2,3]
으로 왼손 오른손 엄지의 위치를 정해주는 배열값을 잡는다.

numbers배열을 map으로 돌려서
const leftKeypad = [1,4,7]
const rightKeypad = [3,6,7]
에 대하여, .includes(number)이 참인지 알아본다.
왼손의 경우 "L"을 리턴하고, position [0, leftKeypad.indexOf(number)]
오른손의 경우 "R"을 리턴하고, position [2, rightKeypad.indexOf(number)]

const middleKeypad = [2,5,8,0]
에 대하여, .includes(number)이 참인지 알아본다.
let targetKeyPosition = [1, middleKeypad.indexOf(number)]을 정한다.
leftThumbPosition, rightThumbPosition 각각가져와서 
const leftDistance = getDistance(leftThumbPosition, targetKeyPosition)와 같이 함수를 호출해서 leftDistance와 rightDistance를 각각 구한다.

function getDistance(leftThumbPosition, targetKeyPosition) {
  return Math.floor(
    Math.sqrt(
      Math.pow(leftThumbPosition[0]-targetKeyPosition[0])+
      Math.pow(leftThumbPosition[1]-targetKeyPosition[1])+
    )
  )
}


## 3. 실행
***
## 4. 회고
***
https://velog.io/@sunyoung1542/%EC%BD%94%ED%85%8C-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%82%A4%ED%8C%A8%EB%93%9C-%EB%88%84%EB%A5%B4%EA%B8%B0
## Sources
***
https://programmers.co.kr/learn/courses/30/lessons/67256