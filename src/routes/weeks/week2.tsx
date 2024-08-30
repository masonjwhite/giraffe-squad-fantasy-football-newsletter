import PowerRankings from '../../components/PowerRankings/PowerRankings';
import WeekNav from '../../components/WeekNav/WeekNav';
import * as data from '../../data/week2';

export default function Week2() {
    return (
        <div>
            <h1>WEEK 2</h1>
            <PowerRankings
              teams={data.teams}
            />
            <WeekNav
              prevWeek={1}
              nextWeek={3}
            />
        </div>
    );
}
