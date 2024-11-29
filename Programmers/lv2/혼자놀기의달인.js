function solution(cards) {
  //이미 열어본 상자는 다시 열지 않도록 check
  const check = Array(cards.length + 1).fill(false);

  //상자를 열고, 상자에 담긴 숫자에 맞는 상자를 여는 작업 반복
  const getCards = (first) => {
    const arr = [];

    //처음으로 열 상자의 번호를 넣음
    let card = first;
    //열지 않은 상자들만 열도록 반복
    while (!check[card]) {
      //연 상자는 arr에 추가
      arr.push(card);
      //연 상자 체크
      check[card] = true;
      //연 상자에 들어있는 카드 번호에 맞는 상자로 변경
      card = cards[card - 1];
    }
    //한번의 반복에서 연 상자들의 숫자를 리턴
    return arr.length;
  };

  //정답을 담을 배열
  const ans = [];
  //정답 배열 안에 들어있는 숫자들의 합이 카드의 전체 개수와 같아지면 반복 종료 = 모든 상자를 열면 반복 종료
  while (ans.reduce((acc, cur) => acc + cur, 0) < cards.length) {
    //1번부터 열지 않은 상자를 찾아 상자를 여는 작업 반복
    for (let i = 1; i <= cards.length; i++) {
      if (!check[i]) ans.push(getCards(i));
    }
  }
  //내림차순으로 정렬 후 가장 큰 수 두개의 곱이 정답
  ans.sort((a, b) => b - a);
  //만약 한번에 모든 상자를 다 열 경우 0점이므로, ans의 길이가 1인 경우엔 0을 리턴
  return ans.length === 1 ? 0 : ans[0] * ans[1];
}
