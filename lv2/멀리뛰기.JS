function solution(n) {
    var answer = 0;
    let pibonacci = [1, 1]
    for(let i = 2; i <= n; i++){
        pibonacci.push((pibonacci[i-1] + pibonacci[i-2])%1234567)
    }
    answer = pibonacci[n]
    return answer;
}
//1칸: 1 -> 1
//2칸: 11 2 -> 2
//3칸: 111 12 21 -> 3
//4칸: 1111 121 211 112 22 -> 5
//피보나치 수열임을 알 수 있음