function solution(name, yearning, photo) {
  let obj = {}
  name.map((el, idx) => obj[el] = yearning[idx])
  let answer = []
  for(let group of photo){
      answer.push(group.map(el => obj[el] ? obj[el] : 0).reduce((acc, cur) => acc + cur))
  }
  return answer;
  
  //추억 점수를 해시로 만들어 인물당 점수를 저장한다
  //이후 이름이 있다면 점수로 바꾸고, 없다면 0으로 바꾼 뒤 reduce로 모두 합해준다
  //이 점수들을 answer 배열에 넣고 리턴
}