import { Title, Text } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        I'm a Giraffe!
        <Text
          inherit
          // variant="gradient"
          component="span"
          c="#ff9c5a"
          // gradient={{ from: '#ff9c5a', to: '#fbd089' }}
        >
          Power Rankings
        </Text>
      </Title>

      {/* <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Vite project includes a minimal setup, if you want to learn more on Mantine +
        Vite integration follow{' '}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor>
        . To get started edit pages/Home.page.tsx file.
      </Text> */}
    </>
  );
}
