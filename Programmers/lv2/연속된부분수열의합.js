function solution(sequence, k) {
    let ans = []
    let len = sequence.length
    //시작, 끝 인덱스 
    let start = 0
    let end = 0
    let sum = 0
    let gap = 1000000
    
    while(end < len){
        //sum에 end 포인트 값을 더함
        sum += sequence[end]
        
        //k가 sum보다 작거나 같아질 때 까지 start를 이동시킴
        while(sum > k && start <= end){
            sum -= sequence[start]
            start++
        }
        //sum이 k와 같고, 두 요소 사이 간격이 기존 값보다 작으면 ans 업데이트
        if(sum === k){
            if(end - start < gap){
                gap = end - start
                ans = [start, end]
            }
        }
        //sum이 k보다 작아지면 end++
        end++
    }
    return ans
}
//투 포인터 기법 사용