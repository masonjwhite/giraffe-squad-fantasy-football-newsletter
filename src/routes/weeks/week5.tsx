import { Title } from '@mantine/core';
import Scores from '../../components/Scores/Scores';
import WeekSelector from '../../components/WeekSelector/WeekSelector';
import News from '../../components/News/News';
import PowerRankings from '../../components/PowerRankings/PowerRankings';
import Standings from '../../components/Standings/Standings';
import WeekNav from '../../components/WeekNav/WeekNav';
import useScrollToTop from '../../hooks/useScrollToTop';
import * as data from '../../data/week5';
import * as lastWeekData from '../../data/week4';
import globalClasses from '../../global.module.css';
import MatchupOfTheWeek from '../../components/MatchupOfTheWeek/MatchupOfTheWeek';
import PlayerSpotlight from '../../components/PlayerSpotlight/PlayerSpotlight';

export default function Week5() {
  useScrollToTop();

  return (
    <div>
      <Scores teams={data.teams} matchups={data.matchups} />
      <div className={globalClasses.contentContainer}>
        <div className={globalClasses.pageHeaderContainer}>
          <Title id="week-title" className={globalClasses.pageHeader}>
            Week 5
          </Title>
          <WeekSelector />
        </div>
        <News article={data.article} jokeArticles={data.jokeArticles} />
        <PlayerSpotlight player={data.playerOfTheWeek} />
        <PowerRankings
          title="Movie Power Rankings"
          author={data.powerRankingsAuthor}
          teams={data.teams}
          lastWeekTeams={lastWeekData.teams}
        />
        <MatchupOfTheWeek awayTeam={data.teams[1]} homeTeam={data.teams[3]} />
        <Standings teams={data.teams} />

        <WeekNav selectedWeek={5} />
      </div>
    </div>
  );
}
