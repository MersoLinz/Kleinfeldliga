
export function generateRoundRobinSchedule(teams) {
  const spielplan = [];                         
  const numTeams = teams.length;                
  if (numTeams % 2 !== 0) teams.push(null);     // Falls Anzahl ungerade ist, eine Null wird hinzugefügt

  const totalRounds = numTeams - 1;           
  const halfSize = numTeams / 2;           
  const teamList = [...teams];                  // Kopie der Teams, um die Originalteams nicht zu verändern 
  const fixed = teamList.pop();                 // Das letzte Team wird fixiert und dreht sich nicht. Nur die anderen rotieren.

  for (let round = 0; round < totalRounds; round++) {
    const pairs = [];                           
    const roundTeams = [fixed, ...teamList];    // das fixte Team wird an den Anfang der Liste gesetzt, Rest rotieren

    for (let i = 0; i < halfSize; i++) {
      const home = round % 2 === 0 ? roundTeams[i] : roundTeams[numTeams - 1 - i];  // Home-Team wechselt je nach Runde
      const away = round % 2 === 0 ? roundTeams[numTeams - 1 - i] : roundTeams[i];  // Away-Team wechselt je nach Runde
      if (home && away) pairs.push([home, away]);
    }

    teamList.splice(1, 0, teamList.pop());  // Das letzte Team wird an die zweite Position verschoben, um die Rotation zu ermöglichen
    spielplan.push(pairs);
  }

  return spielplan;
}
