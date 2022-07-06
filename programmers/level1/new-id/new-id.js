function solution(new_id) {
  const answer =
    new_id
      .toLowerCase()
      .replace(/[^a-z0-9-_.]/g, "")
      .replace(/[.]+/g, ".")
      .replace(/^[.]|[.]$/g, "")
      .padEnd(3, "a") // .replace(/^$/, "a") - 정답
      .substr(0, 15).replace(/[.]$/g, "");

  return answer.padEnd(3, answer[answer.length - 1]);
}

console.log(solution(
  "...!@BaT#*..y.abcdefghijklm"
));
