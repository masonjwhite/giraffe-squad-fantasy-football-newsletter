import WeekNav from '../../components/WeekNav/WeekNav';
import * as data from '../../data/weeks/week3';

export default function Week3() {
    return (
        <div>
            <h1>WEEK 3</h1>
            <p>{data.test}</p>
            <WeekNav
              prevWeek={2}
              nextWeek={null}
            />
        </div>
    );
}
