import { Group, Avatar, Text, Accordion, Title } from '@mantine/core';
import { Team } from '../../types';
import globalClasses from '../../global.module.css';
import classes from './PowerRankings.module.css';

interface AccordionLabelProps {
  name: string;
  logo: string;
  coach: string;
  powerRank: number;
}

interface PowerRankingsProps {
  teams: Team[];
}

function AccordionLabel({ name, logo, coach, powerRank }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <div>
        <Text className={classes.powerRank} size="xl">
          {powerRank}
        </Text>
      </div>
      <Avatar src={logo} radius="xl" size="lg" />
      <div>
        <Title className={classes.teamName}>{name}</Title>
        <Title order={5} c="dimmed">
          {coach.split(' ')[0]}
        </Title>
      </div>
    </Group>
  );
}

export default function PowerRankings({ teams }: PowerRankingsProps) {
  const items = teams
    .sort((a, b) => a.powerRank - b.powerRank)
    .map((team) => (
      <Accordion.Item value={team.id} key={team.name}>
        <Accordion.Control>
          <AccordionLabel {...team} />
        </Accordion.Control>
        <Accordion.Panel>
          <Text className={classes.powerRankText} size="sm">
            {team.powerRankText}
          </Text>
        </Accordion.Panel>
      </Accordion.Item>
    ));

  return (
    <>
      <Title className={globalClasses.sectionHeader}>Power Rankings</Title>
      <Text className={classes.credit}>By Will Stone, Deputy Commissioner</Text>
      <div className={classes.listContainer}>
        <Accordion chevronPosition="right" variant="contained" className={classes.accordian}>
          {items}
        </Accordion>
      </div>
    </>
  );
}
