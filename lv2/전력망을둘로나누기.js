function solution(n, wires) {
    const max = Math.max(...wires.flat())
    let ans = []
    //시작 노드 2개와, 해당 노드들을 제외한 그래프로 bfs
    const bfs = (start, arr) => {
        //첫번째 노드와 연결된 노드 개수
        let sum1 = 1
        //두번째 노드와 연결된 노드 개수
        let sum2 = 1
        //방문 노드 체크
        let check = Array(max+1).fill(false)
        //큐 생성
        const queue = []
        //첫번째 노드를 큐에 넣고 bfs 로직 시작
        queue.push(start[0][0])
        while(queue.length > 0){
            const curNode = queue.shift()
            check[curNode] = true
            //탐색중인 그래프에 현재 노드가 있으면, 연결된 노드를 큐에 넣음
            //넣은 노드는 방문처리
            //연결된 노드 수 +1
            for(let node of arr){
                if(node[0] === curNode && !check[node[1]]){
                    queue.push(node[1])
                    check[node[1]] = true
                    sum1++
                } else if(node[1] === curNode && !check[node[0]]){
                    queue.push(node[0])
                    check[node[0]] = true
                    sum1++
                }
            }
        }
        //첫번째 노드와 연결된 모든 노드를 다 찾으면
        //두번쨰 노드 역시 똑같이 연결된 노드 수를 구함
        queue.push(start[0][1])
        while(queue.length > 0){
            const curNode = queue.shift()
            check[curNode] = true
            
            for(let node of arr){
                if(node[0] === curNode && !check[node[1]]){
                    queue.push(node[1])
                    check[node[1]] = true
                    sum2++
                } else if(node[1] === curNode && !check[node[0]]){
                    queue.push(node[0])
                    check[node[0]] = true
                    sum2++
                }
            }
        }
        //모든 과정이 끝나면 두 노드와 연결된 노드 개수의 차를 구해서 push
        ans.push(Math.abs(sum1 - sum2))
    }
    
    for(let i = 0; i < wires.length; i++){
        const clone = wires.map(e=>e)
        const first = clone.splice(i, 1)
        bfs(first, clone)
    }
    return Math.min(...ans)
}
//맨 처음 두 노드와 연결된 노드들을 각각 찾은 뒤, 두 개수의 차를 구함
