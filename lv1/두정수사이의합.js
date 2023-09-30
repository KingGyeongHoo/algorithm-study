function solution(a, b) {
  return Array(Math.abs(b - a) + 1).fill().map((el, idx) => idx + Math.min(a,b)).reduce((acc, cur) => acc + cur)
  
  //a에서 b까지의 배열을 만든 뒤, 이 배열의 요소들을 reduce 함수로 모두 더해준다
}