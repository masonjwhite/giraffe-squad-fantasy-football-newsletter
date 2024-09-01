import { Link } from 'react-router-dom';
import { Text } from '@mantine/core';
import { CURRENT_PUBLISHED_WEEK } from '../../settings';
import classes from './WeekNav.module.css';

interface WeekNavProps {
    selectedWeek: number;
}

export default function WeekNav({ selectedWeek }: WeekNavProps) {
    const showPrevWeek = selectedWeek > 1;
    const prevWeek = selectedWeek - 1;

    const showNextWeek = selectedWeek < CURRENT_PUBLISHED_WEEK;
    const nextWeek = selectedWeek + 1;

    return (
        <div className={classes.weekNavContainer}>
            <div>
                {showPrevWeek && (
                    <Link to={`/weeks/${prevWeek.toString()}`}>
                        <Text className={classes.linkText}>
                            &lt;&lt;
                            Week{' '}
                            {prevWeek}{' '}
                        </Text>
                    </Link>
                )}
            </div>
            <div>
                {showNextWeek && (
                    <Link to={`/weeks/${nextWeek.toString()}`}>
                        <Text className={classes.linkText}>
                            Week{' '}
                            {nextWeek}{' '}
                            &gt;&gt;
                        </Text>
                    </Link>
                )}
            </div>
        </div>
    );
}
