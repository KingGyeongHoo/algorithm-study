function solution(maps) {
    let ans = []
    //maps를 배열 형태로 만들고, 방문 여부를 확인하는 check 배열 생성
    maps = maps.map(el => el.split(''))
    const maxY = maps.length
    const maxX = maps[0].length
    let check = Array.from(maps, el => el.map(e => false))
    
    //이동
    const dy = [0, 1, 0, -1]
    const dx = [1, 0, -1, 0]
    
    //bfs
    const bfs = (y, x) => {
        //맨 첫칸부터 시작
        let sum = maps[y][x]/1
        const queue = [[y, x]]
        check[y][x] = true
        while(queue.length > 0){
            const [cY, cX] = queue.shift()
            for(let i = 0; i < dy.length; i++){
                const nY = cY + dy[i]
                const nX = cX + dx[i]
                if(nY >= 0 && nY < maxY
                   && nX >= 0 && nX < maxX){
                    if(!check[nY][nX] && maps[nY][nX] !== 'X'){
                        //다음 갈 칸을 방문하지 않았고, X가 아니라면
                        //sum에 다음 칸의 수를 더함
                        sum += maps[nY][nX]/1
                        check[nY][nX] = true
                        queue.push([nY, nX])
                    }
                }
            }
        }
        return sum
    }
    
    //X가 아닌 칸에서 bfs 실행
    for(let y = 0; y  < maxY; y++){
        for(let x = 0; x < maxX; x++){
            if(!check[y][x] && maps[y][x] !== 'X'){
                ans.push(bfs(y, x))
            }
        }
    }
    
    //섬이 없다면 -1, 아니라면 오름차순 정렬
    if(ans.length < 1){
        return [-1]
    } else {
        return ans.sort((a,b) => a- b)
    }
}
//bfs 사용
//bfs로 탐색하는 각 칸의 합을 리턴