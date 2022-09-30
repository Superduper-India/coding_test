// function solution(participant, donePlayer) {
//   participant.sort();
//   donePlayer.sort();
//   let answer;

//   participant.forEach((a, index) => {
//     if (participant[index] !== donePlayer[index]) {
//       answer = participant[index - 1];
//     }
//   });

//   return answer;
// }

function solution(participant, donePlayer) {
  participant.sort();
  donePlayer.sort();
  const len = participant.length;

  for (let i = 0; i < len; i++) {
    if (participant[i] !== donePlayer[i]) {
      return participant[i];
    }
  }
}

test("run", () => {
  expect(solution(
    ["leo", "kiki", "eden"], ["eden", "kiki"]
  )).toEqual("leo");
  expect(solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )).toEqual("vinko");
  expect(solution(
    ["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]
  )).toEqual("mislav");
});
