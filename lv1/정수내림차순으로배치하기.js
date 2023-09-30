function solution(n) {
  return Number(n.toString().split('').map(el => Number(el)).sort((a,b) => b - a).join(''));
  
  //n을 문자열로 바꾸고 배열로 나눈 뒤 정수로 바꿔준다. 이후 sort 함수를 통해 내림차순 정렬을 하고
  //join 함수를 통해 다시 합쳐준 다음 정수로 만들어주면 된다,
}