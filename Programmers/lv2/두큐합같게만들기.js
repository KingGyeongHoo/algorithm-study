function solution(queue1, queue2) {
    let ans = 0
    //첫 상태와 똑같아지려면 큐의 길이 * 3번의 교환을 해야 함
    //[1][2] -> [1,2][] -> [2][1]
    let limit = queue1.length * 3
    //미리 합을 구해 놓음
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0)
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0)
    //더할 인덱스 
    let idx_1 = 0
    let idx_2 = 0
    
    while(ans < limit){
        if(sum1 > sum2){
            //두 큐 중 합이 더 큰 쪽에서 작은 쪽으로 숫자를 줌
            //큐의 idx번째 요소를 더함
            let shift = queue1[idx_1]
            sum1 -= shift
            sum2 += shift
            queue2.push(shift)
            idx_1++
            ans++
        } else if(sum1 < sum2) {
            let shift = queue2[idx_2]
            sum2 -= shift
            sum1 += shift
            queue1.push(shift)
            idx_2++
            ans++
        } else {
            //두 합이 같으면 ans 리턴
            return ans
        }
        //limit까지 돌았다면 -1 리턴
        if(ans === limit){
            return -1
        }
    }
}
//합을 미리 구해놓고, 더하고 빼는 방식 사용
//반복 종료 조건이 관건 => 모든 교환 후 다시 첫 상태로 돌아오면 반복종료
//[1][2] -> [1,2][] -> [2][1] => 이 경우 첫 상태와 동일 => 반복종료
//shift() 사용시 시간복잡도가 O(n)이라서 시간초과 => 인덱스로 접근