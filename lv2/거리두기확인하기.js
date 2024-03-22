function solution(places) {
    const ans = []

    //맨해튼 거리가 2 이하인 모든 경우의 수를 찾음
    const dx = [1,0,-1,0,2,0,-2,0,1,-1,-1,1]
    const dy = [0,1,0,-2,0,2,0,-2,1,1,-1,-1]
    //각 경우별로 파티션이 놓여 있어야 하는 위치 설정
    const check=[[[1,0]], [[0,1]],[[-1,0]],[[0,-1]],[[1,0]], [[0,1]],[[-1,0]],[[0,-1]],[[1,0],[0,1]],[[-1,0],[0,1]],[[-1,0],[0,-1]],[[1,0],[0,-1]]]
    
    const chk = (arr) => {
        //모든 위치를 순회
        for(let y = 0; y < 5; y++){
            for(let x = 0; x < 5; x++){
                //만약 현재 위치에 지원자가 있다면
                if(arr[y][x] ==="P"){
                    //맨해튼 거리가 2 이하인 모든 위치 탐색
                    for(let i = 0; i < dx.length; i++){
                        const cY = y + dy[i]
                        const cX = x + dx[i]
                        //탐색한 위치에 사람이 있다면
                        if(0 <= cX && cX < 5 && 0 <= cY && cY < 5){
                            if(arr[cY][cX] === "P"){
                                //파티션이 있어야 하는 위치 탐색
                                for(let j = 0; j < check[i].length; j++){
                                    const [checkX, checkY] = check[i][j]
                                    //파티션이 있어야 하는 위치에 파티션이 없다면 0 리턴
                                    if(arr[y+checkY][x+checkX] !== 'X'){
                                        return 0
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return 1
    }
    for(let el of places){
        ans.push(chk(el))
    }
    return ans
}
