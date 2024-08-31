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

  return (
    <Card withBorder className={classes.scoreTile}>
      <div className={classes.scoreTileTeam}>
        <div>{awayTeam?.id}</div>
        <Avatar src={awayTeam?.logo} radius="xl" size="s" className={classes.pic} />
      </div>
      <div className={classes.scoreTileScore}>
        <span className={isTie ? '' : homeTeamWon ? classes.winner : ''}>
          {homeTeamScore}
        </span>
        <span>
          -
        </span>
        <span className={isTie ? '' : homeTeamWon ? '' : classes.winner}>
          {awayTeamScore}
        </span>
      </div>
      <div className={classes.scoreTileTeam}>
        <div>{homeTeam?.id}</div>
        <Avatar src={homeTeam?.logo} radius="xl" size="s" className={classes.pic} />
      </div>
    </Card>
  );
}

interface ScoresProps {
  teams: Team[];
  matchups: Matchup[];
}

export default function Scores({ teams, matchups } : ScoresProps) {
  return (
    <Grid gutter="0">
      {matchups.map((matchup) => (
          <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 2 }} className={classes.scoreGridCol}>
            <Score
              homeTeam={teams.find(team => team.id === matchup.homeTeam.id) || null}
              homeTeamScore={matchup.homeTeam.score}
              awayTeam={teams.find(team => team.id === matchup.awayTeam.id) || null}
              awayTeamScore={matchup.awayTeam.score}
            />
          </Grid.Col>
        ))}
    </Grid>
  );
}
