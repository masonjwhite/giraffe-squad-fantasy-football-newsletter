import { Title } from '@mantine/core';
import Timeline from '../../components/History/Timeline/Timeline';
import useScrollToTop from '../../hooks/useScrollToTop';
import globalClasses from '../../global.module.css';

// TODO MW: Add nav

export default function History() {
  useScrollToTop();

  return (        
    <div className={globalClasses.contentContainer}>
        <Title className={globalClasses.pageHeaderCenter}>League History</Title>
        <Timeline />
    </div>
  );
}