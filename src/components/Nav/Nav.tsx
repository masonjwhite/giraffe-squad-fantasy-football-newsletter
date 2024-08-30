import { Title } from '@mantine/core';
import classes from './Nav.module.css';

export default function Nav() {
  return (
    <div className={classes.navbar}>
      <Title className={classes.espnFont}>I&apos;m a Giraffe!</Title>
      <Title className={classes.lightEspnFont}>Fantasy Newsletter</Title>
    </div>
  );
}
