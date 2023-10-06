function solution(n, m, section) {
  let wall = Array(n).fill().map((el, idx) => section.includes(idx + 1) ? false : true)
  let index = 0
  let tried = 0
  while(wall.indexOf(false) !== -1){
      if(wall[index]){
          index++
      } else {
          for(let i = index; i < index + m; i++){
              wall[i] = true
          }
          index = index + m
          tried++
      }
  }
  return tried;
}
//칠해진 벽을 true, 칠해지지 않은 벽을 false로 하는 배열을 만든다
//현재 탐색할 부분을 index로 두고, wall에 false가 없어질 때 까지 반복한다
//탐색하는 부분이 true라면 다음 부분을 탐색, false라면 m만큼 true로 바꾸고, index+m 부분부터 다시 탐색한다
//반복 횟수는 tried라는 변수에 저장하고, false를 탐색할 때만 1씩 늘려준다