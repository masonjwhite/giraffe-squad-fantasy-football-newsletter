import classes from './Nav.module.css';
import { Title, Text } from '@mantine/core';

export default function Nav() {
  return (
    <div className={classes.navbar}>
      <Title className={classes.espnFont}>I'm a Giraffe!</Title>
      <Title className={classes.lightEspnFont}>Fantasy Newsletter</Title>
    </div>
  );
}
