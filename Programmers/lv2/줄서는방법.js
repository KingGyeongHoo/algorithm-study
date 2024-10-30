//팩토리얼 함수 선언
const factorial = (num) =>{
    let result = 1
    while(num > 0){
        result *= num
        num--
    }
    return result
}

function solution(n, k) {
    //0부터 n까지의 배열 생성 => i와 맞추기 위해
    let arr = Array.from({length: n+1}).map((_, idx) => idx)
    let ans = []
    //n이 0이 될 때 까지 반복
    while(n > 0){
        //맨 앞사람 탐색
        for(let i = 1; i <= arr.length; i++){
            //k가 i번째에 위치해 있다면
            if((i-1) * factorial(n-1) < k && i * factorial(n-1) >= k){
                //i를 정답 배열에 담고, arr에서 i번째 요소를 삭제
                ans.push(arr[i])
                arr.splice(i, 1)
                //k는 factorial(n-1) * (i-1를 뻄
                k -= factorial(n-1) * (i-1)
                //n 역시 1빼줌
                n -= 1
                break
            }
        }
    }  
    return ans
}

//맨 앞에 올 사람을 먼저 정하고, 그 전까지의 경우의 수를 k에서 뺌
//앞에 이미 사람이 있으니 n 역시 1 빼고, 갱신한 k에 대해 같은 연산 수행
//dfs => 20! 감당 안될 듯
