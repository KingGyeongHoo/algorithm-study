function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur)/arr.length

  //reduce 함수로 배열의 모든 값들을 더해준 뒤 length 함수로 배열의 크기를 구해 나누어준다
}