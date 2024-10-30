function solution(cards1, cards2, goal) {
  let newArr = []
  for(let goals of goal){
      if(cards1[0] === goals){
          newArr.push(cards1[0])
          cards1.shift()
      } else if(cards2[0] === goals){
          newArr.push(cards2[0])
          cards2.shift()
      }
  }
  return newArr.length === goal.length ? 'Yes' : 'No'
  
  //새 배열을 만들고, goal의 요소들과 cards1, cards2의 첫 요소들을 각각 비교한다
  //만약 goal의 요소가 cards1 또는 cards2의 첫 요소와 같다면 해당 요소를 새 배열 newArr에 넣고 shift를 통해 지워버린다
  //반복이 끝났을 때, 만약 순서가 맞다면 newArr와 goal은 정확히 같은 요소를 가지고 있을 것이므로
  //두 배열의 길이를 비교하여 참 거짓을 판별한다
}