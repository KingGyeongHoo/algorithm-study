function solution(prices) {
    //초를 담을 배열 stack
    const stack = []
    //i번쨰 가격과 i+1번째 ~ 끝까지의 가격 비교
    for(let i = 0; i < prices.length - 1; i++){
        let sum = 0
        for(let j = i+1; j < prices.length; j++){
            //떨어지지 않았다면 sum++
            if(prices[i] <= prices[j]){
                sum++
            } else {
                //떨어졌다면, sum을 1 더하고 stack에 담은 뒤 sum을 초기화
                sum++
                stack.push(sum)
                sum = 0
                break
            }
        }
        //sum이 도중에 떨어지지 않았다면 스택에 넣고 초기화
        if(sum !== 0){
            stack.push(sum)
            sum = 0
        }
        
    }
    //마지막은 무조건 0이므로, 0을 넣고 리턴
    return [...stack, 0]
}