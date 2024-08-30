import PowerRankings from '../../components/PowerRankings/PowerRankings';
import WeekNav from '../../components/WeekNav/WeekNav';
import * as data from '../../data/week3';

export default function Week3() {
    return (
        <div>
            <h1>WEEK 3</h1>
            <PowerRankings
              teams={data.teams}
            />
            <WeekNav
              prevWeek={2}
              nextWeek={null}
            />
        </div>
    );
}
