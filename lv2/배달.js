function solution(N, road, K) {
    //key번 마을까지의 누적 시간을 담은 객체
    const obj = {1 : 0}
    //큐 생성
    const queue = [1]
    while(queue.length > 0){
        //큐에서 현재 위치한 마을을 꺼냄
        const cur = queue.shift()
        //현재 마을에서 출발하는 road가 있나 탐색
        for(let i = 0; i < road.length; i++){
            //시작 마을, 도착 마을, 소요 시간
            let [start, end, time] = road[i]
            //만약 cur에서 출발하고, 탐색하지 않은 마을이라면
            if(cur === start){
                //도착 마을을 이미 방문 한 적 있고, 현재 마을에서 가는 루트가 K이하인데다가,
                //현재 루트에서 가는 방법이 시간이 덜 걸리면
                if(obj[end] && obj[start] + time <= K && obj[start] + time < obj[end]){
                    //현재 마을에서 가는 루트로 루트 갱신
                    obj[end] = obj[start] + time
                    //다음 마을을 큐에 추가
                    queue.push(end)
                } else if(!obj[end] && obj[start] + time <= K){
                    //만약 방문한 적 없고 루트가 K보다 적다면 
                    //현재 마을에서 가는 누적 시간을 도착 마을까지의 누적 시간으로 설정
                    obj[end] = obj[start] + time
                    //다음 마을을 큐에 추가
                    queue.push(end)
                }
            } 
            //만약 end에서 출발하고, 탐색하지 않은 마을이라면
            else if(cur === end){
                //도착 마을을 이미 방문 한 적 있고, 현재 마을에서 가는 루트가 K이하인데다가,
                //현재 루트에서 가는 방법이 시간이 덜 걸리면
                if(obj[start] && obj[end] + time <= K && obj[end] + time < obj[start]){
                    //현재 마을에서 가는 루트로 루트 갱신
                    obj[start] = obj[end] + time
                    //다음 마을을 큐에 추가
                    queue.push(start)
                } else if(!obj[start] && obj[end] + time <= K){
                    //만약 방문한 적 없고 루트가 K보다 적다면 
                    //현재 마을에서 가는 누적 시간을 도착 마을까지의 누적 시간으로 설정
                    obj[start] = obj[end] + time
                    //다음 마을을 큐에 추가
                    queue.push(start)
                }
            }
        }
    }
    return Object.values(obj).length
}
//시작, 도착, 시작 -> 도착 가는데 걸리는 시간
//1에서 출발
//1과 연결된 곳들을 먼저 탐색
//그래프에 [현재 마을, 다음 마을]인 경우와 [다음 마을, 현재 마을]인 경우를 구분
//1과 연결된 곳이 있고, 해당 마을까지 가는 시간이 K보다 작다면
//해당 마을과 가는 시간을 큐에 넣음
//이미 간 마을은 방문 처리(반복 줄임)
//어느 루트로는 시간이 안되는데, 어느 루트로는 될 수 있으므로 모든 루트 탐색
//시작 -> 끝과 끝-> 시작을 모두 탐색 해야 할 듯
