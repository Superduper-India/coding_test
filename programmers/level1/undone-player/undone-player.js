function solution(participant, completion) {
  participant.sort();
  completion.sort();
  console.log(participant.sort(), completion.sort());
  let answer = "";
  const len = participant.length;

  for (let i = 0; i < len; i++) {
    if (participant[i] !== completion[i]) {
      return answer = participant[i];
    }
  }

  return answer;
}

// ToDo Result "mislav"

console.log(solution(
  ["mislav", "stanko", "mislav", "ana"],
  ["stanko", "ana", "mislav"]	,
));
