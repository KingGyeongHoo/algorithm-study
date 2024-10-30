function solution(rows, columns, queries) {
    //행렬 생성
    let board = Array.from({length: rows}, (el, idx) => idx).map(el => Array(columns).fill(el).map((e, i) => e*columns + i + 1))
    let ans = []
    
    //query마다 반복
    for(let query of queries){
        //시작 좌표와 끝 좌표를 설정
        let [startY, startX, endY, endX] = query.map(el => el-1)

        //시작 위치
        let y = startY
        let x = startX
        //처음 이동 -> 우측으로 이동
        let move = [0,1]
        //최솟값
        let min = rows * columns + 1

        //위치를 저장할 큐 생성
        let queue = [board[y+1][x]]
        while(true){
            //현재 값이 최솟값보다 작으면 갱신
            if(board[y][x] < min){
                min = board[y][x]
            }

            //다음 이동할 위치
            const nY = y + move[0]
            const nX = x + move[1]
            
            //큐에 현재 위치를 push
            queue.push(board[y][x])
            //현재 위치를 직전 위치의 값으로 변경
            board[y][x] = queue.shift()

            //끝에 도달할 때 마다 방향 전환
            if(nY === startY && nX === endX){
                move = [1,0]
            } else if(nY === endY && nX === endX){
                move = [0,-1]
            } else if(nY === endY && nX === startX){
                move = [-1,0]
            }
            //종료조건
            if(y === startY + 1 && x === startX){
                break
            }
            //종료되지 않았다면, 현재 위치를 다음 위치로 갱신
            y = nY
            x = nX

        }
        //ans에 최솟값을 push
        ans.push(min)
    }
    return ans
}
//각 모서리에 부딪힐 때 마다 방향을 바꿈
//방향은 [1,0]처럼 배열로 변경
//현재 위치가 모서리일 때 => 방향 배열 변경
//다음 칸의 값을 temp에 담고, 다음 칸의 값을 현재 칸의 값으로 변경
