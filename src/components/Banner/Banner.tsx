import { Title } from '@mantine/core';
import classes from './Banner.module.css';

export default function Banner() {
  return (
    <div className={classes.banner}>
      <Title className={classes.espnFont}>I&apos;m a Giraffe!</Title>
      <Title className={classes.lightEspnFont}>Fantasy Newsletter</Title>
    </div>
  );
}
