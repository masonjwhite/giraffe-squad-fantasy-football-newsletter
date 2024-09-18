import { Group, Avatar, Text, Accordion, Title } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight, IconArrowsHorizontal } from '@tabler/icons-react';
import { Team } from '../../types';
import globalClasses from '../../global.module.css';
import classes from './PowerRankings.module.css';

interface AccordionLabelProps {
  id: string;
  name: string;
  logo: string;
  coach: string;
  powerRank: number;
  lastWeekTeams: Team[];
}

interface PowerRankingsProps {
  teams: Team[];
  lastWeekTeams?: Team[];
}

function AccordionLabel({ id, name, logo, coach, powerRank, lastWeekTeams }: AccordionLabelProps) {
  const lastWeekPowerRank = lastWeekTeams.find((team) => team.id === id)?.powerRank || 0;
  const DiffIcon =
    powerRank === lastWeekPowerRank
      ? IconArrowsHorizontal
      : powerRank > lastWeekPowerRank
      ? IconArrowDownRight
      : IconArrowUpRight;
  const iconColor =
    powerRank === lastWeekPowerRank ? '#ff9c5a' : powerRank > lastWeekPowerRank ? 'red' : 'green';
  return (
    <Group wrap="nowrap">
      <div>
        <Text className={classes.powerRank} size="xl">
          {powerRank}
          {lastWeekPowerRank > 0 && <DiffIcon size="1rem" stroke={1.5} color={iconColor} />}
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

export default function PowerRankings({ teams, lastWeekTeams = [] }: PowerRankingsProps) {
  const items = teams
    .sort((a, b) => a.powerRank - b.powerRank)
    .map((team) => (
      <Accordion.Item value={team.id} key={team.name}>
        <Accordion.Control>
          <AccordionLabel {...team} lastWeekTeams={lastWeekTeams} />
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
