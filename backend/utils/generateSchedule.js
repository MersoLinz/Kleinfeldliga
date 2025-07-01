export function generateRoundRobinSchedule(teams) {
  const schedule = [];
  const numTeams = teams.length;
  if (numTeams % 2 !== 0) teams.push(null);

  const totalRounds = numTeams - 1;
  const halfSize = numTeams / 2;

  const teamList = [...teams];
  const fixed = teamList.pop();

  for (let round = 0; round < totalRounds; round++) {
    const pairs = [];
    const roundTeams = [fixed, ...teamList];

    for (let i = 0; i < halfSize; i++) {
      const home = round % 2 === 0 ? roundTeams[i] : roundTeams[numTeams - 1 - i];
      const away = round % 2 === 0 ? roundTeams[numTeams - 1 - i] : roundTeams[i];
      if (home && away) pairs.push([home, away]);
    }

    teamList.splice(1, 0, teamList.pop());
    schedule.push(pairs);
  }

  return schedule;
}
