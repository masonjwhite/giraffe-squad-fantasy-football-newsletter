import { Title } from '@mantine/core';
import Scores from '../../components/Scores/Scores';
import WeekSelector from '../../components/WeekSelector/WeekSelector';
import News from '../../components/News/News';
import PowerRankings from '../../components/PowerRankings/PowerRankings';
import Standings from '../../components/Standings/Standings';
import WeekNav from '../../components/WeekNav/WeekNav';
import useScrollToTop from '../../hooks/useScrollToTop';
import * as data from '../../data/week1';
import globalClasses from '../../global.module.css';
import MatchupOfTheWeek from '../../components/MatchupOfTheWeek/MatchupOfTheWeek';
import PlayerSpotlight from '../../components/PlayerSpotlight/PlayerSpotlight';

export default function Week1() {
  useScrollToTop();

  return (
    <div>
      <Scores teams={data.teams} matchups={data.matchups} />
      <div className={globalClasses.contentContainer}>
        <div className={globalClasses.pageHeaderContainer}>
          <Title className={globalClasses.pageHeader}>Week 1</Title>
          <WeekSelector />
        </div>
        <News article={data.article} jokeArticles={data.jokeArticles} />
        <PlayerSpotlight player={data.playerOfTheWeek} />
        <PowerRankings teams={data.teams} />
        <MatchupOfTheWeek awayTeam={data.teams[9]} homeTeam={data.teams[1]} />
        <Standings teams={data.teams} />

        <WeekNav selectedWeek={1} />
      </div>
    </div>
  );
}
