import { Grid, Card, Avatar } from '@mantine/core';
import teams from '../../data/teams';
import classes from './Scores.module.css';

type Props = {
  awayTeamId: string;
  homeTeamId: string;
  score: string;
};

function Score({ awayTeamId, homeTeamId, score }: Props) {
  const awayTeam = teams.find(({ id }) => awayTeamId === id);
  const homeTeam = teams.find(({ id }) => homeTeamId === id);
  return (
    <Card withBorder className={classes.scoreTile}>
      <div className={classes.scoreTileTeam}>
        <div>{awayTeam?.id}</div>
        <Avatar src={awayTeam?.image} radius="xl" size="s" className={classes.pic} />
      </div>
      <div className={classes.scoreTileScore}>{score}</div>
      <div className={classes.scoreTileTeam}>
        <div>{homeTeam?.id}</div>
        <Avatar src={homeTeam?.image} radius="xl" size="s" className={classes.pic} />
      </div>
    </Card>
  );
}

export default function Scores() {
  return (
    <Grid gutter="0">
      <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 2 }} className={classes.scoreGridCol}>
        <Score awayTeamId="will" score="117-139" homeTeamId="kara" />
      </Grid.Col>
      <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 2 }} className={classes.scoreGridCol}>
        <Score awayTeamId="mason" score="109-136" homeTeamId="audrey" />
      </Grid.Col>
      <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 2 }} className={classes.scoreGridCol}>
        <Score awayTeamId="kristen" score="140-133" homeTeamId="jackie" />
      </Grid.Col>
      <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 2 }} className={classes.scoreGridCol}>
        <Score awayTeamId="zac" score="97-125" homeTeamId="joe" />
      </Grid.Col>
      <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 2 }} className={classes.scoreGridCol}>
        <Score awayTeamId="zari" score="80-96" homeTeamId="adam" />
      </Grid.Col>
      <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 2 }} className={classes.scoreGridCol}>
        <Score awayTeamId="david" score="81-154" homeTeamId="nick" />
      </Grid.Col>
    </Grid>
  );
}
