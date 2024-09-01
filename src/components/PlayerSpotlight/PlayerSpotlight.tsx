import { Image, Text } from '@mantine/core';
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
        <Text>
          <span className={classes.playerName}>
            {player.name}
          </span>
          {' '}
          <span className={classes.playerPoints}>
            {player.points}
          </span>
        </Text>
      </div>
    </>
  );
}
