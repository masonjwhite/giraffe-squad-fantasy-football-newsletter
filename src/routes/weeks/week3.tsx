import WeekSelector from '../../components/WeekSelector/WeekSelector';
import PowerRankings from '../../components/PowerRankings/PowerRankings';
import WeekNav from '../../components/WeekNav/WeekNav';
import * as data from '../../data/week3';

export default function Week3() {
    return (
        <div>
            <WeekSelector />
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
