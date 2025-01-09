function solution(numbers, hand) {
  const ans = [];
  let [leftHand, rightHand] = [10, 12];

  for (let num of numbers) {
    if (num === 0) num = 11;
    if (num === 1 || num === 4 || num === 7) {
      leftHand = num;
      ans.push("L");
    } else if (num === 3 || num === 6 || num === 9) {
      rightHand = num;
      ans.push("R");
    } else {
      const leftDis =
        Math.floor(Math.abs(num - leftHand) / 3) +
        (Math.abs(num - leftHand) % 3);
      const rightDis =
        Math.floor(Math.abs(num - rightHand) / 3) +
        (Math.abs(num - rightHand) % 3);

      if (leftDis > rightDis) {
        rightHand = num;
        ans.push("R");
      } else if (leftDis < rightDis) {
        leftHand = num;
        ans.push("L");
      } else {
        hand === "right" ? (rightHand = num) : (leftHand = num);
        ans.push(hand.slice(0, 1).toUpperCase());
      }
    }
  }
  return ans.join("");
}
