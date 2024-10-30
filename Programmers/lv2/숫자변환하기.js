function solution(x, y, n) {
    let ans = 999999999
    
    //방문을 확인할 객체
    const obj = {}
    const bfs = (X) => {
        //탐색할 인덱스
        let idx = 0
        //큐 생성
        const queue = [[X, 0]]
        //시작 요소 방문 처리
        obj[X] = true
        //큐의 끝까지 탐색
        while(idx < queue.length){
            //idx번째 요소를 탐색
            const [cx, cnt] = queue[idx]
            //탐색했으면 다음 요소로 넘어감
            idx += 1
            
            //최솟값 갱신
            if(cx === y){
                if(cnt < ans){
                    ans = cnt
                }
            } else {
                //방문여부 확인 후 방문처리, 큐에 넣음
                if(cnt < ans && cx*2 <= y && !obj[cx*2]){
                    queue.push([cx*2, cnt+1])
                    obj[cx*2] = true
                }
                if(cnt < ans && cx*3 <= y && !obj[cx*3]){
                    queue.push([cx*3, cnt+1])
                    obj[cx*3] = true
                }
                if(cnt < ans && cx+n <= y && !obj[cx+n]){
                    queue.push([cx+n, cnt+1])
                    obj[cx+n] = true
                }
            }
        }
    }
    bfs(x)
    return ans > 1000000 ? -1 : ans
}
//shift -> 시간초과 => 인덱스 사용해서 해결