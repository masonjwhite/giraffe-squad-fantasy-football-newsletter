import { Title } from '@mantine/core';
import Timeline from '../../components/History/Timeline/Timeline';
import useScrollToTop from '../../hooks/useScrollToTop';
import globalClasses from '../../global.module.css';

export default function History() {
  useScrollToTop();

  return (
    <div className={globalClasses.contentContainer}>
      <Title id="page-title" className={globalClasses.pageHeaderCenter}>
        League History
      </Title>
      <Timeline />
    </div>
  );
}
