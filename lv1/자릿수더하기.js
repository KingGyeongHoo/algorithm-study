function solution(n)
{
    return n.toString().split('').map(el => Number(el)).reduce((acc, cur) => acc + cur);

    //n을 문자로 바꾼 후, split('')을 통해 배열로 나눠준다.
    //이후 map을 이용해 모든 요소를 정수화 시킨 뒤 reduce 함수로 모두 더해준다
}