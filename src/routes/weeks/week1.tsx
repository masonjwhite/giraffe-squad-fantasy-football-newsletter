import WeekNav from '../../components/WeekNav/WeekNav';
import * as data from '../../data/weeks/week1';

export default function Week1() {
    return (
        <>
            <h1>WEEK 1</h1>
            <p>{data.test}</p>
            <WeekNav
              prevWeek={null}
              nextWeek={2}
            />
        </>
    );
}
