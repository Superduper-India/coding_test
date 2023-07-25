# JadenCase 문자열 만들기

## 1. 문제

---

### 원하는 것

문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성

### 조건

- JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열
- 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 된다.
- s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
  숫자는 단어의 첫 문자로만 나옵니다.
  숫자로만 이루어진 단어는 없습니다.
  공백문자가 연속해서 나올 수 있습니다.

## 2. 계획

- s.split(' ')으로 ['3people', 'unfollowed', 'me']이렇게 나눠준다.
- 위의 stringArr을 map으로 돌려서 string[0] = firstLetter가 !isNaN(Number(firstLetter))// 숫자인경우, 두번째 글자는 소문자를 리턴하도록한다.
- 그 외의 경우 두번째 글자가 대문자를 리턴하도록한다.
- 위의 배열을 .join(' ')한다.

## 3. 실행

---

## 4. 회고

---

어떻게하면 더 효율적으로 풀까?
어떻게하면 더 효과적으로 풀까?
어디에 써먹을까?

## Sources

---

https://school.programmers.co.kr/learn/courses/30/lessons/12951
