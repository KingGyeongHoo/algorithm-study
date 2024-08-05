function solution(k, tangerine) {
    let ans = 0
    const obj = {}
    
    // 종류별 귤의 개수 세기
    for(let item of tangerine){
        if(obj[item]){
            obj[item] += 1
        } else {
            obj[item] = 1
        }
    }
    // 귤의 개수가 많은 것 부터 정렬
    const items = Object.values(obj).map(el => Number(el)).sort((a,b) => b - a)
    // k개의 귤 중 최소한의 종류만 추려냄
    for(let item of items){
        k -= item
        ans++
        if(k <= 0){
            return ans
        }
    }
}

// 각 크기별로 귤의 개수를 구한 뒤, 가장 큰 개수부터 K에서 뺀다
// K가 0보다 크다면 ans(종류)를 1 추가
// K가 0 이하가 되면 ans를 리턴
