import { Link, useLocation } from 'react-router-dom';
import { Menu, Button } from '@mantine/core';
import { CURRENT_PUBLISHED_WEEK } from '../../settings';
import classes from './WeekSelector.module.css';

export default function WeekSelector() {
  const { pathname } = useLocation();

  const selectedWeekNumber = parseInt(pathname.split('/')[2], 10);

  // Creates an array of selections based on CURRENT_PUBLISHED_WEEK
  // Example: CURRENT_PUBLISHED_WEEK = 3 -> [1, 2, 3]
  const availableWeekNumbers = Array.from({ length: CURRENT_PUBLISHED_WEEK }, (_, i) => i + 1);

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button size="lg-compact" className={classes.button}>
          Change
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {availableWeekNumbers.map((weekNumber) => (
          <Link to={`/weeks/${weekNumber}`}>
            <Menu.Item disabled={weekNumber === selectedWeekNumber}>Week {weekNumber}</Menu.Item>
          </Link>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
