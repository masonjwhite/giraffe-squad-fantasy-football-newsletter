import { Link, useLocation } from 'react-router-dom';
import { Menu, Button } from '@mantine/core';
import { CURRENT_WEEK } from '../../settings';

export default function WeekSelector() {
    const { pathname } = useLocation();

    const selectedWeekNumber = parseInt(pathname.split('/')[3], 10);

    // Creates an array of selections based on CURRENT_WEEK
    // Example: CURRENT_WEEK = 3 -> [1, 2, 3]
    const availableWeekNumbers = Array.from({ length: CURRENT_WEEK }, (_, i) => i + 1);

    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <Button size="lg">
                    Week{' '}
                    {selectedWeekNumber}
                </Button>
            </Menu.Target>
            <Menu.Dropdown>
                {availableWeekNumbers.map((weekNumber) => (
                    <Link to={`/giraffe-squad-fantasy-football/weeks/${weekNumber}`}>
                        <Menu.Item disabled={weekNumber === selectedWeekNumber}>
                            Week{' '}
                            {weekNumber}
                        </Menu.Item>
                    </Link>
                ))}
            </Menu.Dropdown>
        </Menu>
    );
}
