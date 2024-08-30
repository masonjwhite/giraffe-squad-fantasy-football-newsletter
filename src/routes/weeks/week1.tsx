import PowerRankings from '../../components/PowerRankings/PowerRankings';
import WeekNav from '../../components/WeekNav/WeekNav';
import * as data from '../../data/week1';

export default function Week1() {
    return (
        <>
            <h1>WEEK 1</h1>
            <PowerRankings
              teams={data.teams}
            />
            <WeekNav
              prevWeek={null}
              nextWeek={2}
            />
        </>
    );
}
