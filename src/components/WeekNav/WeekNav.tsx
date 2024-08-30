import { Link } from 'react-router-dom';
import { Text } from '@mantine/core';

interface WeekNavProps {
    prevWeek: Number | null,
    nextWeek: Number | null,
}

export default function WeekNav({ prevWeek, nextWeek }: WeekNavProps) {
    const nextWeekStr = nextWeek?.toString();
    const prevWeekStr = prevWeek?.toString();

    return (
        <div>
            {prevWeek && (
                <Link to={`/giraffe-squad-fantasy-football/weeks/${prevWeekStr}`}>
                    <Text style={{ color: 'white' }}>
                        &lt;&lt;
                        Week{' '}
                            {prevWeekStr}{' '}
                    </Text>
                </Link>
            )}
            {nextWeek && (
                <Link to={`/giraffe-squad-fantasy-football/weeks/${nextWeekStr}`}>
                    <Text style={{ color: 'white' }}>
                        Week{' '}
                        {nextWeekStr}{' '}
                        &gt;&gt;
                    </Text>
                </Link>
            )}
        </div>
    );
}
