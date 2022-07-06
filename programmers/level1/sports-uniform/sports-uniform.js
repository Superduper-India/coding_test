function solution(n, lost, reserve) {
  let count = n - lost.length; // 전체 학생수 - 체육복 잃어버린 학생수
  lost.sort();
  reserve.sort();

  lost.map(lostStudent => {
    if (reserve.includes(lostStudent)) {
      reserve = reserve.filter(student => student !== lostStudent);
      lost = lost.filter(student => student !== lostStudent);
      count++;
    }
  });

  lost.map(lostStudent => {
    if (reserve.includes(lostStudent - 1)) {
      reserve = reserve.filter(student => student !== lostStudent - 1);
      count++;
    } else if (reserve.includes(lostStudent + 1)) {
      reserve = reserve.filter(student => student !== lostStudent + 1);
      count++;
    }
  });

  return count;
}

// ToDo result 5

console.log(solution(5, [2, 4], [1, 3, 5],));
