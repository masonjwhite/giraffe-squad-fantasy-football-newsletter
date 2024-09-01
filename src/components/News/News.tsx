import { Grid, Card, Image, Title, Text, Flex, Collapse, Box, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Article } from '../../types';
import classes from './News.module.css';

interface Props {
  article: Article;
  jokeArticles: string[];
}

export default function News({ article, jokeArticles }: Props) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className={classes.container}>
      <Grid>
        <Grid.Col span={{ md: 12, lg: 8 }} className={classes.expandable}>
          <Box onClick={toggle}>
            <Image radius="md" src={article.coverImage} className={classes.mainImage} />
            <Title className={classes.title}>{article.title}</Title>
            <Text>{article.summary}</Text>
            <Flex gap="sm" align="Center">
              <Text c="dimmed" size="sm">
                {article.author}
              </Text>
              <Text c="dimmed" size="sm">
                -
              </Text>
              <Text c="dimmed" size="xs">
                Click to expand
              </Text>
            </Flex>
            <Collapse in={opened}>
              <Divider my="sm" variant="dashed" />
              <Text>{article.content}</Text>
            </Collapse>
          </Box>
        </Grid.Col>
        <Grid.Col span={{ md: 12, lg: 4 }}>
          <Card>
            <Title className={classes.newsSubHeader}>In the News</Title>
            <Divider my="sm" variant="dotted" />
            {jokeArticles.map((title, i) => {
              const isLastArticle = i === jokeArticles.length - 1;

              return (
                <a
                  className={classes.jokeArticleLink}
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text>{title}</Text>
                  {!isLastArticle && <Divider my="sm" variant="dotted" />}
                </a>
              );
            })}
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}
