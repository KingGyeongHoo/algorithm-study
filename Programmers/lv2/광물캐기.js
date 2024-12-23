function solution(picks, minerals) {
  let min = Infinity;
  const dfs = (p, idx, fatigue) => {
    if (p[0] + p[1] + p[2] === 0 || idx > minerals.length) {
      min = Math.min(min, fatigue);
      return;
    }
    const [dia, iron, stone] = p;
    const mineral = minerals.slice(idx, idx + 5).filter(Boolean);

    if (dia > 0) {
      let fat = 0;
      for (m of mineral) {
        fat += getFatigue("diamond", m);
      }
      dfs([dia - 1, iron, stone], idx + 5, fatigue + fat);
    }

    if (iron > 0) {
      let fat = 0;
      for (m of mineral) {
        fat += getFatigue("iron", m);
      }
      dfs([dia, iron - 1, stone], idx + 5, fatigue + fat);
    }

    if (stone > 0) {
      let fat = 0;
      for (m of mineral) {
        fat += getFatigue("stone", m);
      }
      dfs([dia, iron, stone - 1], idx + 5, fatigue + fat);
    }
  };
  dfs(picks, 0, 0);

  return min;
}

const getFatigue = (pick, mineral) => {
  if (pick === "diamond") {
    return 1;
  } else if (pick === "iron") {
    if (mineral === "diamond") return 5;
    return 1;
  } else if (pick === "stone") {
    if (mineral === "diamond") return 25;
    else if (mineral === "iron") return 5;
    return 1;
  }
};
