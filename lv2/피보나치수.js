function solution(n) {
  let fib = [0, 1]
  for(let i = 2; i <= n; i++){
      fib.push((fib[i-1] + fib[i-2]) % 1234567)
  }
  return fib.at(-1)
  
  //배열을 이용한 피보나치 수열을 만든 뒤, at(-1) 함수를 이용해 맨 마지막 요소를 리턴한다
  //연산이 안되는 경우가 있으므로 나머지는 피보나치 수열 내에서 넣어준다
  //피보나치 수는 44번쨰만 되어도 int로 표현 가능한 수를 넘어버림. 따라서 결과를 연산한다면 int값을 넘어버림
  //하지만 덧셈 후의 나머지를 연산에 넣어준다면 무조건 1234567보단 작은 수가 남게 됨
  //(A+B)%C = (A%C)+(B%C)가 되므로, 연산의 나머지 결과값만을 담을 수 있게 되므로, 수열 안에 나머지값을 넣어도 된다는 것
}