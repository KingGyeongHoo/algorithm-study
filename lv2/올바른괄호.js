function solution(s){
  if(s[0] === ')'){
      return false
  }
  let stack = []
  s.split('').map(el => el === '(' ? stack.push(el) : stack.length !== 0 ? stack.pop() : stack.push(el))

  return stack.length < 1;
}
  
//     s가 )로 시작하면 무조건 false가 나오게 한다
//     이후 (가 나오면 스택에 넣고, )가 나오면 짝이 맞는 괄호이므로 스택에서 뺀다
//     모두 짝이 맞는 괄호라면 스택은 빈 배열일 것이기 때문에 배열의 길이가 1보다 작은지 여부를 판단하면 된다