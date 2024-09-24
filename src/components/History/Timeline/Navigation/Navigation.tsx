import { Anchor } from '@mantine/core';
import classes from './Navigation.module.css';

export default function Navigation() {
  const handleLinkClick = (year: string) => {
    document.getElementById(year)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={classes.navigationContainer}>
      <Anchor className={classes.navigationLink} onClick={() => handleLinkClick('page-title')}>
        1993
      </Anchor>
      <Anchor className={classes.navigationLink} onClick={() => handleLinkClick('2019')}>
        2019
      </Anchor>
      <Anchor className={classes.navigationLink} onClick={() => handleLinkClick('2020')}>
        2020
      </Anchor>
      <Anchor className={classes.navigationLink} onClick={() => handleLinkClick('2021')}>
        2021
      </Anchor>
      <Anchor className={classes.navigationLink} onClick={() => handleLinkClick('2022')}>
        2022
      </Anchor>
      <Anchor className={classes.navigationLink} onClick={() => handleLinkClick('2023')}>
        2023
      </Anchor>
      <Anchor className={classes.navigationLink} onClick={() => handleLinkClick('2024')}>
        2024
      </Anchor>
    </div>
  );
}
