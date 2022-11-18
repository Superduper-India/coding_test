function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
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
