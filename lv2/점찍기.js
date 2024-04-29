function solution(k, d) {
    let ans = 0
    //x축 좌표 순회
    for(let x = 0; x <= d; x+=k){  
        //정답에 y축 길이를 k로 나눈 뒤 1을 더한 수를 더해줌
        ans += Math.floor(Math.sqrt(d**2 - x**2) / k) + 1
    } 
    return ans
}
//문제를 요약하면, 반지름이 d인 원 안의 점을 구하는 것
//자료 크기 100만 이상 -> 2중 for문은 시간초과
//피타고라스 정리 이용 => 대각선 길이를 알기 때문에 x축 길이만 알면
//y축 길이는 자동으로 구할 수 있음 => 이를 k로 나눈 뒤 1을 더함(y가 0일 때)
