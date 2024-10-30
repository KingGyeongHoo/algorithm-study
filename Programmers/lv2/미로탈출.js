function solution(maps) {
    //bfs 기본 세팅
    const maxY = maps.length
    const maxX = maps[0].length
    
    const dy = [0,1,0,-1]
    const dx = [1,0,-1,0]
    
    //레버가 있는 곳의 좌표를 설정
    let leverY = 0
    let leverX = 0
    
    const bfs = (y, x, target) => {
        //방문여부를 확인하는 check 배열
        //레버까지, 도착점까지 2번 확인해야 하므로 bfs마다 따로 설정
        const check = Array(maxY).fill().map(() => Array(maxX).fill(false))
        
        //큐에 현재 좌표와 총 소요 시간을 담음
        const queue = [[y,x,0]]
        //시작 위치를 방문 처리
        check[y][x] = true
        while(queue.length > 0){
            const [cY, cX, time] = queue.shift()
            //현재 위치가 target과 같으면, 레버 위치를 갱신하고 소요시간 리턴
            if(maps[cY][cX] === target){
                leverY = cY
                leverX = cX
                return time
            }
            for(let i in dy){
                const nY = cY + dy[i]
                const nX = cX + dx[i]
                if(0 <= nY && nY < maxY && 0 <= nX && nX < maxX){
                    //레버를 당기기 전 출구를 지날 수 있으므로, X가 아니기만 하면 지나갈 수 있음
                    if(!check[nY][nX] && 
                       (maps[nY][nX] !== 'X' || maps[nY][nX] === target )){
                        check[nY][nX] = true
                        queue.push([nY, nX, time+1])
                    }
                }
            }
        }
        //만약 타겟으로 이동할 수 없을 경우, -1을 리턴
        return -1
    }
    //시작위치 -> 레버
    let toLever = 0
    for(let y = 0; y < maxY; y++){
        for(let x = 0; x < maxX; x++){
            if(maps[y][x] === 'S'){
                //S의 위치에서, 타겟은 L(레버)로 두고 시작
                toLever = bfs(y, x, 'L')
            }
        }
    }
    //레버 -> 출구
    //레버의 위치에서 타겟은 도착지점(E)로 두고 시작
    let fromLever = bfs(leverY, leverX, 'E')
    
    //레버로 이동할 수 없거나, 타겟으로 이동할 수 없으면 -1 리턴
    if(toLever === -1 || fromLever === -1){
        return -1
    }
    //두 구간의 소요시간의 합을 더함
    return (toLever + fromLever)
}
//레버까지의 최단거리 => 문까지의 최단거리를 순서대로 구함
//bfs 2번 사용 => 코드 중복을 피하기 위해 최종 목표(target)만 바꿔서 실행
