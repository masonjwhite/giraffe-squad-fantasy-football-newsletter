import { Image, Text, Grid } from '@mantine/core';
import classes from './PlayerSpotlight.module.css';
import PlayerImg from './player_only.webp';
import { Player } from '../../types';

interface Props {
  player: Player;
}

export default function PlayerSpotlight({ player }: Props) {
  return (
    <>
      <div className={classes.spotlightContainer}>
        <Image src={PlayerImg} className={classes.spotlightImage} />
      </div>
      <div className={classes.playerContainer}>
        <Grid gutter={0}>
          <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
            <Text className={classes.playerName}>{player.name}</Text>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 6 }} className={classes.flexColumn}>
            <Text className={classes.playerPoints}>{player.points}</Text>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}
