function solution(people, limit) {
    //아이디어 : 몸무게가 가장 적은사람을 이용해 두 사람의 합이 최대한 limit 내로 들어오게 만들자
    //시간초과 발생 : stack 이용
    var answer = 0;
    let lightest = []
    
    //가벼운 순서대로 정렬된 배열을 생성
    let lightArr = people.map(a=>a).sort((a,b) => a - b)
    //무거운 순서대로 정렬된 배열을 생성
    people.sort((a,b) => b - a)
    
    //stack에는 가장 가벼운 사람을 미리 넣어둠
    lightest.push(lightArr[0])
    
    for(let i = 0; i < people.length; i++){
        //가장 가벼운 사람과 가장 무거운 사람의 무게를 더해서 limit보다 작거나 같으면
        if(people[i] + lightest[0] <= limit){
            //가장 가벼운 사람은 건너갔으므로, 배열에서 삭제
            lightArr.shift()
            //stack에서 가장 가벼운 사람을 날리고, 그 다음 가벼운 사람을 추가
            lightest.pop()
            lightest.push(lightArr[0])
            //people은 무거운 순서 -> 맨 끝 인덱스=가장 가벼운 사람 삭제
            people.pop()
            //경우의 수 하나 추가
            answer++
        } 
        //limit보다 크면
        else{
            //그냥 경우의 수 하나 추가
            answer++
        }
    }
    return answer;
}