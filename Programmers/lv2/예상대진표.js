function solution(n,a,b)
{
    var answer = 1;
    while(true){
        //ab 혹은 ba가 붙을 경우 break
        if(a % 2 == 0 && b == a - 1 || b % 2 == 0 && a == b - 1) {
            break
        }
        //1-2번인 경우, 다음엔 무조건 1번, 3-4번인 경우 무조건 2번 ....
        //n-1, n번인 경우 다음엔 무조건 n번이 됨
        a = Math.round(a/2)
        b = Math.round(b/2)
        answer++
    }

    return answer;
}