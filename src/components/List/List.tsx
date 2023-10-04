import { Group, Avatar, Text, Accordion, Title } from '@mantine/core';
import teams from '../../data/teams';
import classes from './List.module.css';

interface AccordionLabelProps {
  name: string;
  image: string;
  coach: string;
  rank: string;
}

function AccordionLabel({ name, image, coach, rank }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <div>
        <Text
        size="xl"
        fw={900}
        variant="gradient"
        gradient={{ from: 'orange', to: 'yellow', deg: 90 }}
      >
        {rank}
      </Text>
      </div>
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Title>{name}</Title>
        {/* <Text size="sm" c="dimmed" fw={400}>
          {description}
        </Text> */}
        <Title order={5} c="dimmed">
          {coach}
        </Title>
      </div>
    </Group>
  );
}

export default function List() {
  const items = teams.map((item) => (
    <Accordion.Item value={item.id} key={item.name}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
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