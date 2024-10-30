function solution(s) {
  return [Math.min(...s.split(' ')), Math.max(...s.split(' '))].join(' ');
  
  //s를 split으로 나눈 뒤, 최댓값과 최솟값을 구해 배열을 만들고, 이를 join으로 하나의 문자열로 합친다
}