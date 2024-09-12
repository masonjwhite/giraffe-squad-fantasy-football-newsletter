import { Mark } from '@mantine/core';
import classes from './TeamName.module.css';

interface Props {
    teamName: string;
}

export default function TeamName({ teamName }: Props) {
    return (
        <Mark className={classes.teamName} color="rgb(255, 156, 90)">
            {teamName}
        </Mark>
    );
}
