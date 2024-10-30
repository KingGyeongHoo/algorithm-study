function solution(book_time) {
    //시간을 숫자로 변환한 뒤, 오름차순 정렬
    //퇴실 시간에 청소 시간 10분을 추가
    book_time = book_time.map(time => {
        let [startH, startM] = time[0].split(':')
        let [endH, endM] = time[1].split(':')
        
        if(endM/1 + 10 >= 60){
            endH = (endH/1 + 1).toString()
            endM = '0' + ((endM/1 + 10) % 60).toString()
        } else {
            endM = (endM/1 + 10).toString()
        }
        return [(startH+startM)/1, (endH+endM)/1]
    }).sort((a,b) =>a[0] - b[0])
    
    //현재 사용중인 방의 개수
    let rooms = 1
    //방에 입실한 손님의 퇴실 시간을 나타내는 객체
    const obj = {1: book_time[0][1]}
    
    //모든 손님을 확인
    for(let i = 1; i < book_time.length; i++){
        //입실, 퇴실 시간 할당
        const [start, end] = book_time[i]
        //이용 가능한 방의 여부
        let available = false
        //사용중인 모든 방을 순회
        for(let j = 1; j <= rooms; j++){
            //현재 사용중인 방의 퇴실시간이 손님의 입실 시간보다 작거나 같으면
            if(obj[j] <= start){
                //이용 가능 여부를 true로 바꿈
                available = true
                //방의 퇴실시간을 손님의 퇴실 시간으로 업데이트
                obj[j] = end
                break
            }
        }
        //이용 가능한 방이 없다면
        if(!available){
            //새 방을 추가
            obj[rooms+1] = end
            rooms++ 
        }
    }
    return Object.values(obj).length
}
//입실 시간 순서로 정렬한 뒤, 빠른 입실 시간부터 방에 넣음
//모든 방을 순회
//만약 입실 시간이 퇴실 시간보다 이르면 새로운 방을 만든 뒤 입실
//입실 시간이 퇴실 시간보다 느리면, 해당 방의 퇴실 시간을 업데이트
//시간을 4자리 숫자로 변환하여 대소 비교