function solution(players, callings) {
  const rank_name = {};
  const name_rank = {};
  for (let r in players) {
    rank_name[r] = players[r];
    name_rank[players[r]] = Number(r);
  }
  for (let call of callings) {
    let ranking = Number(name_rank[call]);
    let front = rank_name[ranking - 1];

    name_rank[call] -= 1;
    name_rank[front] += 1;

    rank_name[ranking] = front;
    rank_name[ranking - 1] = call;
  }

  return Object.values(rank_name);
}
