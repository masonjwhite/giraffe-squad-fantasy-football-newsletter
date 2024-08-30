import WeekNav from '../../components/WeekNav/WeekNav';
import * as data from '../../data/weeks/week2';

export default function Week2() {
    return (
        <div>
            <h1>WEEK 2</h1>
            <p>{data.test}</p>
            <WeekNav
              prevWeek={1}
              nextWeek={3}
            />
        </div>
    );
}
