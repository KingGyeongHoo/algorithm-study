function solution(n) {
  return n === 0 ? 0 : Array(n).fill().map((el, idx) => idx+1).filter(el => n % el === 0).reduce((acc, cur) => acc + cur)

  //n개의 요소를 가진 배열을 만들고, 1부터 n까지의 숫자로 채운다.
  //그렇게 만들어진 배열에서 filter 함수를 이용해 n의 약수를 찾고, reduce 함수로 합을 구한다
  //이때, n이 0일 경우에는 런타임 에러가 발생하므로 삼항연산자를 통해 예외 처리를 해준다
}