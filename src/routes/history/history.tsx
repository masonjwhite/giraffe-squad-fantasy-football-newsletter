import { Title, Grid } from '@mantine/core';
import Timeline from '../../components/Timeline/Timeline';
import useScrollToTop from '../../hooks/useScrollToTop';
import globalClasses from '../../global.module.css';

export default function History() {
  useScrollToTop();

  return (        
    <div className={globalClasses.contentContainer}>
        <div style={{ textAlign: "center" }}>
            <Title className={globalClasses.pageHeader}>League History</Title>
        </div>
        <Timeline />
    </div>
  );
}