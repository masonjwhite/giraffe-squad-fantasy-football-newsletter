import { Grid, Card, Avatar } from '@mantine/core';
import { Team, Matchup } from '../../types';
import classes from './Scores.module.css';

interface ScoreProps {
  homeTeam: Team | null;
  homeTeamScore: number;
  awayTeam: Team | null;
  awayTeamScore: number;
}

function Score({ homeTeam, homeTeamScore, awayTeam, awayTeamScore }: ScoreProps) {
  const isTie = homeTeamScore === awayTeamScore;
  const homeTeamWon = homeTeamScore > awayTeamScore;
  const awayTeamWon = awayTeamScore > homeTeamScore;
  const homeTeamClassname = !isTie && homeTeamWon ? classes.winner : '';
  const awayTeamClassname = !isTie && awayTeamWon ? classes.winner : '';

  return (
    <Card withBorder className={classes.scoreTile}>
      <div className={classes.scoreTileTeam}>
        <div>{awayTeam?.coach}</div>
        <Avatar src={awayTeam?.logo} radius="xl" size="2rem" className={classes.pic} />
      </div>
      <div className={classes.scoreTileScore}>
        <span className={awayTeamClassname}>{awayTeamScore.toFixed(2)}</span>
        <span>-</span>
        <span className={homeTeamClassname}>{homeTeamScore.toFixed(2)}</span>
      </div>
      <div className={classes.scoreTileTeam}>
        <div>{homeTeam?.coach}</div>
        <Avatar src={homeTeam?.logo} radius="xl" size="2rem" className={classes.pic} />
      </div>
    </Card>
  );
}

interface ScoresProps {
  teams: Team[];
  matchups: Matchup[];
}

export default function Scores({ teams, matchups }: ScoresProps) {
  return (
    <Grid gutter="0">
      {matchups.map((matchup) => (
        <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 2 }} className={classes.scoreGridCol}>
          <Score
            homeTeam={teams.find((team) => team.id === matchup.homeTeam.id) || null}
            homeTeamScore={matchup.homeTeam.score}
            awayTeam={teams.find((team) => team.id === matchup.awayTeam.id) || null}
            awayTeamScore={matchup.awayTeam.score}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
}
