// 원하는 것
// DB 캐시를 적용할 때 캐시 크기에 따른 실행시간 측정 프로그램을 작성

// 조건
// - 각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성, 대소문자 구분을 하지 않고, 최대 20자로 이루어져 있다.
// - 캐시 교체 알고리즘은 LRU(Least Recently Used)을 사용, 즉 캐시에서 사용한지 가장 오래된 캐시를 지우는 알고리즘
// - cache hit 일 경우 캐시안에 현재 값이 들어있기 때문에 +1
// - cache miss 일 경우 캐시안에 현재 값이 없기 때문에 +5

const solution = (cacheSize, cities) => {
  let answer = 0
  const cache = []
  // 캐시 크기가 0인 경우 계속 cache miss이므로 따로 처리해줘야 한다.
  if (cacheSize === 0) return cities.length * 5

  cities.forEach(city => {
    const targetCity = city.toLowerCase()
    if (!cache.includes(targetCity)) {
      console.log('cache miss일 경우', cache, targetCity)
      // cache miss일 경우,
      if (cache.length === cacheSize) {
        cache.shift() // 오래된 캐시를 지우기
        console.log('오래된 캐시를 지움', cache)
      }
      cache.push(targetCity)
      console.log('데이터를 새로 추가', cache)
      answer += 5
    } else {
      // cache에서 targetCity를 제거해야함
      cache.splice(cache.indexOf(targetCity), 1)
      console.log('cache hit일 경우', cache, targetCity)
      // cache hit일 경우,
      answer += 1
    }
    console.log('결과 answer값', answer)
  })

  console.log(answer)

  return answer
};

test('run', () => {
  expect(solution(0, ["a", "b", "a", "a", "b"])).toBe(25);
  expect(solution(3, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'])).toBe(50);
  expect(solution(3, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul'])).toBe(21);
  expect(
    solution(2, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome'])
  ).toBe(60);
  expect(
    solution(5, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome'])
  ).toBe(52);
  expect(solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork'])).toBe(16);
  expect(solution(0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'])).toBe(25);
});
