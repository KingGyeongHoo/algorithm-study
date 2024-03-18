function solution(n){
    var ans = 1;
    while(n > 1){
        //순간이동을 할 수 있을 때
        if(n % 2 == 0){
            //순간이동
            n /= 2
        } else {
            //아닌경우엔 1칸 점프 후 건전지 소모
            n -= 1
            ans++
        }
    }

    return ans;
}
//순간이동을 최대한 많이 하는 것이 건전지 사용량에서 이득
//순간이동이 안될 경우에만 1칸 점프