import React, { useRef, useEffect, useState } from 'react';
import { Image } from '@mantine/core';
import Helmet from '../../images/Giraffe_Helmet.webp';
import classes from './Hero.module.css';

export default function Hero() {
  const heroContainerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (heroContainerRef.current) {
        setContainerHeight(heroContainerRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', updateHeight);

    // Initial update
    updateHeight();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <div className={classes.heroContainer} ref={heroContainerRef}>
      <Image
        src={Helmet}
        className={classes.helmetImage}
        style={{ height: `${containerHeight}px` }}
      />
      <div className={classes.scrollingContainer}>
        <h1 className={[classes.heroText, classes.heroTopText].join(' ')}>
          Giraffe Squad Giraffe Squad
        </h1>
        <h1 className={[classes.heroBottomText, classes.heroText].join(' ')}>
          Fantasy Football Fantasy Football
        </h1>
      </div>
    </div>
  );
}
