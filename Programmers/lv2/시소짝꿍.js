function solution(weights) {
    //오름차순 정렬
    weights.sort((a,b) => a - b)
    //무게를 탐색했는지 파악하는 객체
    const obj = {}
    let answer = 0
    
    //탐색 시작
    for(let i = 0; i < weights.length-1; i++){
        //현재 무게를 탐색한 적이 있다면
        if(obj[weights[i]]){
            //해당 무게와의 시소 짝꿍에서 1을 뺌
            answer += obj[weights[i]] - 1
            obj[weights[i]] -= 1
        } else {
            //탐색한 적이 없다면
            let cnt = 0
            //현재 무게의 다음 무게부터 탐색 시작
            for(let j = i+1; j < weights.length; j++){
                //토크균형이 맞다면 cnt++
                const ratio = weights[i] / weights[j]
                if(ratio === 1 || ratio === 2/3
                  || ratio === 2/4 || ratio === 3/4){
                    cnt++
                }
            }
            //현재 무게의 시소 짝꿍 수를 객체에 담음
            obj[weights[i]] = cnt
            answer += cnt
        }
    }
    return answer
}
//중복 탐색 안해도 됨 -> 오름차순 정렬 후 탐색
//현재 탐색중인 무게보다 큰 무게와만 비교
//현재 탐색중인 무게를 처음 탐색하는 것이라면
//다음 무게와 순차적으로 무게 비교
//이미 탐색 한 상태라면
//해당 무게의 시계 짝꿍 수를 1 줄임