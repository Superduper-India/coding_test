// 원하는 것
// DB 캐시를 적용할 때 캐시 크기에 따른 실행시간 측정 프로그램을 작성

// 조건
// - 각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성, 대소문자 구분을 하지 않고, 최대 20자로 이루어져 있다.
// - 캐시 교체 알고리즘은 LRU을 사용, 즉 캐시에서 사용한지 가장 오래된 캐시를 지우는 알고리즘
// - cache hit 일 경우 캐시안에 현재 값이 들어있기 때문에 +1
// - cache miss 일 경우 캐시안에 현재 값이 없기 때문에 +5

const solution = (cacheSize, cities) => {
  let cache = [];
  let answer = 0;
  // cacheSize가 0인 경우 예외처리
  // cache.length와 cacheSize가 계속 같은 경우이므로,
  if (cacheSize === 0) return cities.length * 5;

  // 1. cities의 맨 앞 요소부터 cache배열안에 있는지 확인한다.
  cities.forEach((city) => {
    const temp = city.toLowerCase();

    if (cache.includes(temp)) {
      // y => cache배열에서 요소값을 지워주고, 맨 뒤에 요소를 push해준다. (이렇게 해주는 이유는 캐시가 사용되면 가장 최근에 사용한 값이 되므로 맨 뒤에 넣어주기 위해서이다.) answer+=1
      cache.splice(cache.indexOf(temp), 1);
      cache.push(temp);
      answer += 1;
    } else {
      // n => cache배열에서 맨 앞의 값을 shift()하고 맨 뒤에 city값을 push해준다. answer +=5
      if (cache.length === cacheSize) {
        cache.shift();
      }
      cache.push(temp);
      answer += 5;
    }
  });

  return answer;
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
