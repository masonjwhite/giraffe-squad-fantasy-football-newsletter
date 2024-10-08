import { Link } from 'react-router-dom';
import { Text, Image } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import Logo from '../../images/Logo.png';
import { CURRENT_PUBLISHED_WEEK } from '../../settings';
import classes from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={classes.footerContainer}>
      <div className={classes.footer}>
        <div>
          <Link to={`/weeks/${CURRENT_PUBLISHED_WEEK}`}>
            <Image className={classes.logo} src={Logo} />
          </Link>
        </div>
        <div className={classes.footerList}>
          <Text fw={700}>League</Text>
          <Link to="/history">
            <Text className={classes.link}>History</Text>
          </Link>
          <Text className={classes.link}>Administration - Coming soon!</Text>
          <Text className={classes.link}>Careers - Coming soon!</Text>
        </div>
        <div className={classes.footerList}>
          <Text fw={700}>Community</Text>
          <a
            className={classes.link}
            href="https://www.youtube.com/watch?v=kk8dFcopN1c"
            target="_blank"
            rel="noreferrer"
          >
            Complaints
            <IconExternalLink className={classes.linkIcon} />
          </a>
          <a
            className={classes.link}
            href="https://github.com/masonjwhite/giraffe-squad-fantasy-football-newsletter"
            target="_blank"
            rel="noreferrer"
          >
            Github
            <IconExternalLink className={classes.linkIcon} />
          </a>
          <a
            className={classes.link}
            href="https://www.youtube.com/shorts/yRjr7pnhpJ4"
            target="_blank"
            rel="noreferrer"
          >
            Extra link so it looks good
            <IconExternalLink className={classes.linkIcon} />
          </a>
        </div>
      </div>
      <div className={classes.copyright}>
        <Text fs="italic">
          &copy; {currentYear}
          {' - '}
          Made with ❤️ by two commissioners with way too much time on their hands
        </Text>
      </div>
    </div>
  );
}
