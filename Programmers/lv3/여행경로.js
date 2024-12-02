function solution(tickets) {
  //방문 여부를 체크할 객체
  const check = {};
  //공항 리스트를 뽑음
  const airports = [...new Set(tickets.flat())];
  //각 공항별 출발지와 도착지의 방문 여부를 체크
  for (s of airports) {
    check[s] = [];
  }
  for (let [s, e] of tickets) {
    check[s].push(e);
  }

  //모든 티켓을 사용한 경우의 루트를 담을 배열
  const ans = [];
  //dfs에 시작 지점, 현재까지의 방문경로, 방문한 공항을 매게변수로 전달
  const dfs = (start, route, check) => {
    //마지막 공항에 도착할 경우 리턴
    if (check[start].length === 0) {
      //모든 티켓을 사용한 경우 ans 배열에 방문 경로를 담음
      if (route.length === tickets.length + 1) ans.push(route);
      return;
    }
    //현재 공항에서 출발하는 모든 목적지들을 탐색
    for (let next of check[start]) {
      //다음 출발지에서 출발하는 경로가 있을 경우
      if (check[next]) {
        //새로운 방문 객체 생성
        const newCheck = { ...check };

        //현재 출발 공항에서 다음으로 가는 경로를 방문 처리 => 중복 경로가 있을 수 있으므로 slice를 통해 배열에서 삭제해 준다
        const idx = newCheck[start].indexOf(next);
        newCheck[start] = [
          ...newCheck[start].slice(0, idx),
          ...newCheck[start].slice(idx + 1),
        ];

        //다음 공항, 경로에 다음 공항을 추가한 배열, 다음 공항을 방문처리한 객체를 담아 재귀
        dfs(next, [...route, next], newCheck);
      }
    }
  };

  dfs("ICN", ["ICN"], check);

  //오름차순으로 정렬 후 가장 첫 요소를 리턴
  return ans.sort()[0];
}
