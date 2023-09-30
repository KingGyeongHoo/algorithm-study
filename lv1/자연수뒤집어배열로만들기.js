function solution(n) {
  return n.toString().split('').reverse().map(el => Number(el))
  
  //n을 문자로 바꾼 뒤 split으로 배열로 나눈다. 그리고 reverse로 뒤집은 다음 모든 요소들을 정수로 만들어주면 된다.
}