import WeekSelector from '../../components/WeekSelector/WeekSelector';
import PowerRankings from '../../components/PowerRankings/PowerRankings';
import WeekNav from '../../components/WeekNav/WeekNav';
import * as data from '../../data/week2';

export default function Week2() {
    return (
        <div>
            <WeekSelector />
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
