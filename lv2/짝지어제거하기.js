function solution(s)
{
    let stack = [s[0]]
    for(let i = 1; i < s.length; i++){
        stack.at(-1) === s[i] ? stack.pop() : stack.push(s[i])
    }

    return stack.length < 1 ? 1 : 0
    
    //while문으로 돌렸을 때는 효율성 검사 통과 못함
    //스택에 첫 문자를 넣어놓고, for문을 통해 스택의 마지막 글자와 현재 문자열의 첫 글자를 비교한다
    //만약 두 문자가 같다면 스택의 마지막 문자를 제거하고, 다르다면 현재 문자열의 첫 글자를 스택에 넣는다
}