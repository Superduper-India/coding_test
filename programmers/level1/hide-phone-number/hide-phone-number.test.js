function solution(phone_number) {
  const lastNumberPosition = phone_number.length - 4;
  const hidedPhoneNumber = phone_number.substring(0, lastNumberPosition);
  const shownPhoneNumber = phone_number.substring(lastNumberPosition, phone_number.length);

  const regex = /\d/g;
  const newNumber = hidedPhoneNumber.replace(regex, "*");

  return newNumber + shownPhoneNumber;
}

test("run", () => {
  expect(solution(
    "01033334444", "027778888"
  )).toEqual("*******4444", "*****8888");
});
