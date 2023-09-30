function solution(s){
  return s.split('').filter(el => el === 'p' || el ==='P').length === s.split('').filter(el => el === 'y' || el ==='Y').length
  
  //s를 배열로 나눈 뒤 filter를 통해 p, P만 있는 배열과 y, Y만 있는 배열을 나눈다.
  //이후 두 배열의 길이를 비교하여 같다면 true, 다르다면 false를 리턴
}