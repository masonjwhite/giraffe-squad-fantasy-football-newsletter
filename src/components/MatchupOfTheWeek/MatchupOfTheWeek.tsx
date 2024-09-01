import { Title, Container, Image } from '@mantine/core';
import Crest from '../../images/fantasy_league.webp';
import GameOfWeek from '../../images/game_of_week.webp';
import classes from './MatchupOfTheWeek.module.css';
import { Team } from '@/types';

interface Props {
  awayTeam: Team;
  homeTeam: Team;
}

export default function MatchupOfTheWeek({ awayTeam, homeTeam }: Props) {
  return (
    <Container className={classes.Container}>
      <Title className={classes.gameOfWeekTitle}>Game of the Week</Title>
      <div className={classes.Card}>
        <div className={classes.centerContent}>
          <Image src={GameOfWeek} className={classes.matchupTitle} />
          <Image src={Crest} alt="crest" className={classes.leagueCrest} />
        </div>
        <div className={[classes.matchupTeam, classes.leftTeam].join(' ')}>
          <h3 className={classes.teamName}>{awayTeam.name}</h3>
          <Image src={awayTeam.helmetImage} alt="helmet" className={classes.matchupHelmet} />
        </div>
        <div className={[classes.matchupTeam, classes.rightTeam].join(' ')}>
          <h3 className={classes.teamName}>{homeTeam.name}</h3>
          <Image src={homeTeam.helmetImage} alt="helmet" className={classes.matchupHelmetReverse} />
        </div>
      </div>
    </Container>
  );
}
