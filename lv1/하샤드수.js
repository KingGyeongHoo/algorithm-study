function solution(x) {
  return x % x.toString().split('').map(el => Number(el)).reduce((acc, cur) => acc + cur) === 0;
  
  //x / x를 배열로 나눈 후 모든 값을 더한 값을 구해준 뒤, 나머지가 0이라면 true를 리턴한다
}