function solution(s) {
  let splitted = s.split('')
  return splitted.map((el, idx) => idx === 0 || splitted[idx - 1] === ' ' ? el.toUpperCase() : el.toLowerCase()).join('')
  
  //s를 배열로 나눈 뒤, 해당 배열의 각 요소를 순회한다
  //이때 첫 문자나, 요소의 바로 앞에 오는 문자가 공백이라면 대문자로
  //아니라면 모두 소문자로 바꾼 뒤, 다시 join()을 통해 문자열로 합쳐준다
}