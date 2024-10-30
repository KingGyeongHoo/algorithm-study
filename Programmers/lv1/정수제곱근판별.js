function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
  
  //Math.sqrt 함수를 통해 제곱근을 구하고, 이를 Number.isInteger 함수에 넣어 정수인지 판별한다
  //만약 정수라면 제곱근 + 1을 Math.pow 함수에 넣어 제곱을 만들고, 아니라면 -1을 리턴한다
}