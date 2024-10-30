function solution(A,B){
  A.sort((a, b) => a - b)
  B.sort((a, b) => b - a)

  return A.map((el, idx) => el * B[idx]).reduce((acc, cur) => acc + cur);
  
  //두 배열의 최댓값 * 최솟값 차례로 더한 값이 최소가 된다
  //따라서 각각 오름차순, 내림차순 정렬 뒤 같은 인덱스의 요소들을 곱해준다
  //그 뒤 reduce 함수를 통해 배열의 값들을 전부 더해준다
}