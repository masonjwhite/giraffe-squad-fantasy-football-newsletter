import { Group, Avatar, Text, Accordion, Title } from '@mantine/core';
import { Team } from '../../types';
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
        <Text
          size="xl"
          fw={900}
          // variant="gradient"
          // gradient={{ from: 'orange', to: 'yellow', deg: 90 }}
          c="#ff9c5a"
        >
          {powerRank}
        </Text>
      </div>
      <Avatar src={logo} radius="xl" size="lg" />
      <div>
        <Title>{name}</Title>
        <Title order={5} c="dimmed">
          {coach}
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
          <Text size="sm" className={classes.listContent}>
            {team.powerRankText}
          </Text>
        </Accordion.Panel>
      </Accordion.Item>
    ));

  return (
    <div className={classes.listContainer}>
      <Accordion chevronPosition="right" variant="contained" className={classes.accordian}>
        {items}
      </Accordion>
    </div>
  );
}
