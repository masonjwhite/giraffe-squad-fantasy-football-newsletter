import { Title } from '@mantine/core';
import Scores from '../../components/Scores/Scores';
import WeekSelector from '../../components/WeekSelector/WeekSelector';
import News from '../../components/News/News';
import PowerRankings from '../../components/PowerRankings/PowerRankings';
import Standings from '../../components/Standings/Standings';
import WeekNav from '../../components/WeekNav/WeekNav';
import useScrollToTop from '../../hooks/useScrollToTop';
import * as data from '../../data/week2';
import globalClasses from '../../global.module.css';

export default function Week2() {
    useScrollToTop();

    return (
        <div>
            <Scores
              teams={data.teams}
              matchups={data.matchups}
            />
            <div className={globalClasses.contentContainer}>
              <div className={globalClasses.pageHeaderContainer}>
                <Title className={globalClasses.pageHeader}>
                  Week 2
                </Title>
                <WeekSelector />
              </div>
              <News
                article={data.article}
                jokeArticles={data.jokeArticles}
              />
              <PowerRankings
                teams={data.teams}
              />
              <Standings
                teams={data.teams}
              />
              <WeekNav
                selectedWeek={2}
              />
            </div>
        </div>
    );
}
