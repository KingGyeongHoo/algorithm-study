function solution(n) {
  let newN = n + 1
  while(n.toString(2).split('').filter(el => el === '1').length !== newN.toString(2).split('').filter(el => el === '1').length){
      newN++
  }
  return newN
  
  //1번 조건을 만족하기 위해 n보다 1 큰 newN을 설정한다
  //n과 newN을 이진수로 변환한 뒤, 1의 개수를 세어 1의 개수가 같아질 때 까지 반복하고, n을 1씩 늘린다
  //1의 개수가 같아진다면 newN을 리턴
}