function solution(x, n) {
  var answer = [];
  for(let i = 1; i <=n; i += 1){
      answer.push(i*x)
  }
  return answer;

  //i를 1부터 n까지 반복시킨 후, answer 배열에 x*i를 넣어 x만큼의 차이가 나는 숫자들을 넣는다
}