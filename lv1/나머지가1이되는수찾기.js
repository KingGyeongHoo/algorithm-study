function solution(n) {
  return Math.min(...Array(n).fill().map((el, idx) => idx+1).filter(el => n % el === 1));
  
  //1부터 n까지의 요소를 가지는 배열을 만들고, n을 배열의 요소로 나누었을 때 나머지가 1인 수들 중 가장 작은 값을 찾는다 -> 한줄코드지만 속도가 느리다는 단점이 있음
  
  // for(let i = 1; i <= n; i++){
  //     if(n % i === 1){
  //         return i
  //     }
  // }
  //for문을 이용한 간단한 풀이
}