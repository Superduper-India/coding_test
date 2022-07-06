function solution(n) {
  const number = n.toString(3).split("").reverse().join("");
  return Number.parseInt(number, 3);
}

// ToDo result 7;

console.log(solution(45));
