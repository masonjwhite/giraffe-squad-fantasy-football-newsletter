import WeekSelector from '../../components/WeekSelector/WeekSelector';
import PowerRankings from '../../components/PowerRankings/PowerRankings';
import WeekNav from '../../components/WeekNav/WeekNav';
import * as data from '../../data/week1';

export default function Week1() {
    return (
        <div>
            <WeekSelector />
            <PowerRankings
              teams={data.teams}
            />
            <WeekNav
              prevWeek={null}
              nextWeek={2}
            />
        </div>
    );
}
