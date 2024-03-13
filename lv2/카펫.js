function solution(brown, yellow) {
  for (let i = 1; i <= yellow; i++) { // i는 yellow의 height
        if (!Number.isInteger(yellow / i)) { // 정수로 나누어지지않으면 continue.
          continue;
        }
        const n = yellow / i; // n = yellow의 width
        const width = n + 2;  // width = 카펫의 width
        const height = i + 2; // height = 카펫의 height

        if (i * 2 + width * 2 === brown) {
            // (yellow의 height * 2 + 카펫의 width * 2 === brown)
          return [width, height];
        }
      }
}