// 원하는 것
// DB 캐시를 적용할 때 캐시 크기에 따른 실행시간 측정 프로그램을 작성

// 조건
// - 각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성, 대소문자 구분을 하지 않고, 최대 20자로 이루어져 있다.
// - 캐시 교체 알고리즘은 LRU(Least Recently Used)을 사용, 즉 캐시에서 사용한지 가장 오래된 캐시를 지우는 알고리즘
// - cache hit 일 경우 캐시안에 현재 값이 들어있기 때문에 +1
// - cache miss 일 경우 캐시안에 현재 값이 없기 때문에 +5

const checkCacheHit = (currCache, cityName) => {
  // 현재 캐시배열에 도시이름이 있는지 확인하고 hit이면 1, miss면 5를 리턴하는 함수
  return currCache.includes(cityName) ? 1 : 5
}

const solution = (cacheSize, cities) => {
  const cache = []
  let count = 0

  cities.forEach(cityName => {
    const target = cityName.toLowerCase()
    const result = checkCacheHit(cache, target)

    const status = result === 1 ? 'hit' : 'miss'
    if (status === 'miss' && cache.length < cacheSize) cache.unshift(target)
    else {
      cache.pop()
      cache.unshift(target)
    }
    count += result
  })

  return count
};

test('run', () => {
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
