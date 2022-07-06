function solution(numbers, hand) {
  let answer = "";

  let leftThumbPosition = [0, 3];
  let rightThumbPosition = [2, 3];

  const leftKeypad = [1, 4, 7];
  const rightKeypad = [3, 6, 9];
  const middleKeypad = [2, 5, 8, 0];

  function getDistance(thumbPosition, targetKeyPosition) {
    return Math.ceil(
      Math.sqrt(
        Math.pow(thumbPosition[0] - targetKeyPosition[0], 2) +
        Math.pow(thumbPosition[1] - targetKeyPosition[1], 2)
      ));
  }

  numbers.map((number) => {
    if (leftKeypad.includes(number)) {
      answer += "L";
      leftThumbPosition = [0, leftKeypad.indexOf(number)];
    } else if (rightKeypad.includes(number)) {
      answer += "R";
      rightThumbPosition = [2, rightKeypad.indexOf(number)];
    } else {
      const targetKeyPosition = [1, middleKeypad.indexOf(number)];

      const leftDistance = getDistance(leftThumbPosition, targetKeyPosition);
      const rightDistance = getDistance(rightThumbPosition, targetKeyPosition);

      if (rightDistance < leftDistance) { // 오른쪽이 더 가까운 경우
        answer += "R";
        rightThumbPosition = targetKeyPosition;
      } else if (rightDistance > leftDistance) { // 왼쪽이 더 가까운 경우
        answer += "L";
        leftThumbPosition = targetKeyPosition;
      } else if (rightDistance === leftDistance) { // 거리가 동일한 경우
        if (hand === "right") {
          answer += "R";
          rightThumbPosition = targetKeyPosition;
        } else if (hand === "left") {
          answer += "L";
          leftThumbPosition = targetKeyPosition;
        }
      }
    }
  });

  return answer;
}

console.log(solution(
  [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],
  "right",
));
