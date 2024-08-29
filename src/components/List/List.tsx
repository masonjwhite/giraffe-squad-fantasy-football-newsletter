import { Group, Avatar, Text, Accordion, Title } from '@mantine/core';
import teams from '../../data/teams';
import classes from './List.module.css';

interface AccordionLabelProps {
  name: string;
  image: string;
  coach: string;
  rank: number;
}

function AccordionLabel({ name, image, coach, rank }: AccordionLabelProps) {
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
          {rank}
        </Text>
      </div>
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Title>{name}</Title>
        <Title order={5} c="dimmed">
          {coach}
        </Title>
      </div>
    </Group>
  );
}

export default function List() {
  const items = teams
    .sort((a, b) => a.rank - b.rank)
    .map((item) => (
      <Accordion.Item value={item.id} key={item.name}>
        <Accordion.Control>
          <AccordionLabel {...item} />
        </Accordion.Control>
        {/* <Accordion.Panel>
          <Text size="sm" className={classes.listContent}>
            {item.content}
          </Text>
        </Accordion.Panel> */}
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
