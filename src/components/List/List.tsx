import { Group, Avatar, Text, Accordion, Title } from '@mantine/core';
import classes from './List.module.css';

const charactersList = [
  {
    id: 'bender',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'DakStreet Boys',
    description: 'Nick Bradfish',
    content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
    rank: "1",
  },

  {
    id: 'carol',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    description: 'One of the richest people on Earth',
    content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
    rank: "1",
  },

  {
    id: 'homer',
    image: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/2482266e246e51fc0a087de4fb4aa927a806305ef1966242d06f57251d836504.jpg',
    label: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    content: 'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
    rank: "1",
  },
];

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
  rank: string;
}

function AccordionLabel({ label, image, description, rank }: AccordionLabelProps) {
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
        <Title>{label}</Title>
        {/* <Text size="sm" c="dimmed" fw={400}>
          {description}
        </Text> */}
        <Title order={5} c="dimmed">
          {description}
        </Title>
      </div>
    </Group>
  );
}

export default function List() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
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