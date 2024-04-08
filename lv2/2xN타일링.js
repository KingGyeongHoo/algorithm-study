function solution(n) {
    let ans = Array(n).fill(0)
    ans[0] = 1
    ans[1] = 2
    for(let i = 2; i < n; i++){
        ans[i] = (ans[i-1] + ans[i-2]) % 1000000007
    }
    return ans[ans.length - 1]
}
//n = 1 / ans = 1
//n = 2 / ans = 2
//n = 3 / ans = 3
//n = 4 / ans = 5
// => 피보나치 수열임을 알 수 있음
// 시간초과를 방지하기 위해 결과값을 100000007로 나눈 값을 저장