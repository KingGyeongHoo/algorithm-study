function solution(expression) {
    //부호 배열 생성
    const signs = ['+', '-', '*']
    //표현식을 숫자와 기호로 나눔
    const arr = expression.split(/([+\-*])/)
    let ans = -1
    
    //사용한 부호와, 계산식을 담은 배열 전달
    const dfs = (usedSigns, arr) => {
        
        //모든 계산이 끝나고 결과만 남았을 때 종료
        if (arr.length === 1) {
            //절댓값이 현재 최댓값보다 크면 최댓값 갱신
            if(Math.abs(arr[0]) > ans){
                ans = Math.abs(arr[0])
            }
            return
        }
        
        //부호들을 하나씩 탐색
        for (let sign of signs) {
            //아직 사용하지 않은 부호라면
            if (!usedSigns.includes(sign)) {
                //새로운 계산식을 담을 배열
                const calArr = []
                //계산 진행
                for (let i = 0; i < arr.length; i++) {
                    //만약 계산식에 탐색중인 부호가 있다면
                    if (arr[i] === sign) {
                        //상황에 따라 계산 해 줌
                        //새로운 계산식의 맨 뒤 요소와, 기존 계산식에서 부호 다음의 요소를 연산
                        //부호 다음 요소는 건너뛰어도 되므로, i를 1 추가
                        if (arr[i] === '+') {
                            calArr.push(calArr.pop() / 1 + arr[i + 1] / 1)
                            i += 1
                        } else if (arr[i] === '-') {
                            calArr.push(calArr.pop() / 1 - arr[i + 1] / 1)
                            i += 1
                        } else if (arr[i] === '*') {
                            calArr.push(calArr.pop() / 1 * arr[i + 1] / 1)
                            i += 1
                        }
                    } else {
                        //탐색중인 부호가 아닌 경우엔, 새로운 계산식 배열에 넣음
                        calArr.push(arr[i])
                    }
                }
                
                //모든 탐색이 끝나면, 방금 탐색한 부호를 사용한 부호에 넣고
                //새롭게 만든 계산식을 전달
                dfs([...usedSigns, sign], calArr)
            }
        }
    }
    
    dfs([], arr)
    return ans
}
//expression을 문자와 수식으로 분할
//dfs를 통해 모든 경우 탐색 => 3!밖에 안되므로 가능
//표현식의 부호가 현재 탐색중인 부호일 경우, 앞뒤 수를 연산하여 새로운 배열에 추가

