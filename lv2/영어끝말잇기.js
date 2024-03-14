function solution(n, words) {
    //말한 단어를 담을 stack
    let stack = []
    //차례
    let order = 0
    //순서
    let person = 0
    
    //word 배열을 반복
    for(let i = 0; i < words.length; i++){
        //n번마다 차례가 한번씩 바뀜
        order = parseInt(i / n) + 1
        //순서 역시 n번마다 돌아오고, 고정
        person = i % n + 1
        
        //스택에 현재 단어가 들어있거나
        //스택의 마지막 단어의 마지막 글자가 현재 단어의 처음과 다르다면 
        //현재 순서와 차례를 return
        if(stack.includes(words[i]) || (i > 0 &&stack.at(-1).at(-1) != words[i][0])){
            return [person, order]
        } else {
            //아니라면 현재 단어를 stack에 저장
            stack.push(words[i])
        }
    }

    return [0,0];
}