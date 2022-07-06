# 신고 결과 받기
## 1. 문제
***
### 원하는 것
각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성

### 조건
1/ 다른 유저에 한해서는 신고횟수 제한은 없지만 동일한 유저는 1회로 처리된다. <br/>
2/ k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송한다.

## 2. 계획
***
id_list의 길이만큼 새로운 배열(answer)을 만들어서 초기값을 0으로 넣어준다.
report에서 "A B" A가 신고자(reporter), B가 신고받은사람(reported)
{신고받은사람(reported): [신고자(reporter)]}로 되는 객체를 만든다.
reporter배열의 길이가 k이상일때, answer[id_list.indexOf(reporter)]을 구한다.


## 3. 실행
***
## 4. 회고
***
## Sources
***
https://programmers.co.kr/learn/courses/30/lessons/92334
