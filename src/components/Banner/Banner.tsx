import { Link } from 'react-router-dom';
import { Title } from '@mantine/core';
import classes from './Banner.module.css';
import { CURRENT_PUBLISHED_WEEK } from '../../settings';

export default function Banner() {
  return (
    <Link
      className={classes.bannerLink}
      to={`/weeks/${CURRENT_PUBLISHED_WEEK}`}
    >
      <div className={classes.banner}>
      <Title className={classes.espnFont}>I&apos;m a Giraffe!</Title>
        <Title className={classes.lightEspnFont}>Fantasy Newsletter</Title>
      </div>
    </Link>
  );
}
