function solution(A, B) {
  let ans = 0;
  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  let start = 0;
  let end = B.length - 1;
  for (let i in A) {
    if (A[i] < B[start]) {
      ans++;
      start += 1;
    } else {
      end -= 1;
    }
  }
  return ans;
}
