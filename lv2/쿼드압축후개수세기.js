function solution(arr) {
    //가로, 세로 길이
    const maxY = arr.length;
    const maxX = arr[0].length
    //방문 여부를 체크하는 배열
    const check = Array.from(arr, el => el.map(e => false))
    //0과 1의 개수를 담는 배열
    const obj = { 0: 0, 1: 0 }

    //가로,세로가 2의 몇제곱인지 구함
    let n = 0
    while (Math.pow(2, n) < maxY) {
        n++
    }
    //2의 curN제곱만큼 나눠가며 탐색 시작
    //이때, n-1이 아니라 n제곱부터 하는 이유는 모든 숫자가 다 같은 경우를 대비
    let curN = Math.pow(2, n)

    //curN이 1보다 클 때 = 최소 2x2 범위까지 탐색
    while (curN > 1) {
        const bfs = (Y, X, range) => {
            //탐색을 시작하는 수
            const start = arr[Y][X]
            //탐색 범위 내 모든 수가 start와 같은지 판단
            let isAllSame = true
            for (let y = Y; y < Y + range; y++) {
                for (let x = X; x < X + range; x++) {
                    //만약 이미 탐색한 곳이거나, 탐색 범위 내 다른 수가 존재한다면
                    if (check[y][x] || arr[y][x] !== start) {
                        //탐색 종료
                        isAllSame = false
                        break
                    }
                }
            }
            //범위 내 모든 수가 같다면
            if (isAllSame) {
                //해당 수의 개수를 1 늘림
                obj[start] += 1
                //방금 탐색한 곳들을 모두 방문 처리
                for (let y = Y; y < Y + range; y++) {
                    for (let x = X; x < X + range; x++) {
                        check[y][x] = true
                    }
                }
            }
        }
        //curN x curN 범위만큼 탐색 시작
        for (let y = 0; y < maxY; y += curN) {
            for (let x = 0; x < maxX; x += curN) {
                bfs(y, x, curN)
            }
        }
        //탐색 완료시 curN을 1/2 하여 범위를 줄여 탐색
        curN /= 2
    }

    //1x1 탐색
    for (let y = 0; y < maxY; y++) {
        for (let x = 0; x < maxX; x++) {
            if (!check[y][x]) {
                obj[arr[y][x]] += 1
            }
        }
    }
    return Object.values(obj)
}
//bfs를 사용하는데 
//bfs를 반복으로 사용
//현재 가로(세로)의 길이 /2부터 시작
//8x8 탐색 => 4x4 탐색 => 2x2 탐색 ...