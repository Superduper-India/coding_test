function solution(a, b) {
  const week = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");

  return week[new Date(`2016-${a}-${b}`).getDay()];
}

// ToDo result "TUE"

console.log(solution(5, 24));
