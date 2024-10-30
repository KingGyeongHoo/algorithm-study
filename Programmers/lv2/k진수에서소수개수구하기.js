const findDem = (num) => {
	//0, 1인 경우 false 리턴
    if(num < 2){
        return false
    }
    //자기 사진을 2부터 자기 자신의 제곱근까지로 나누어
    //나누어 떨어지는 수가 하나라도 있다면 = 약수가 있다면 false 리턴
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0){
            return false
        }
    }
    //아닌 경우 true 리턴
    return true
}

function solution(n, k) {
    const arr = n.toString(k).split('0').filter(el => el.length > 0 && findDem(el/1))
    return arr.length
}

//n을 k진수로 변환한 뒤, 0을 기준으로 나누고, 그 중 소수인 것들만 판단