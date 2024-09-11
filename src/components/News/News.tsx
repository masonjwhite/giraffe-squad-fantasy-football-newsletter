import { Grid, Card, Image, Title, Text, Flex, Collapse, Box, Divider } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { MainArticle, JokeArticle } from '../../types';
import classes from './News.module.css';

interface Props {
  article: MainArticle;
  jokeArticles: JokeArticle[];
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
            <Flex gap="sm" align="Center" mt="xs">
              <Text c="dimmed" size="sm">
                {article.author}
              </Text>
              <Text c="dimmed" size="sm">
                -
              </Text>
              <Text className={classes.expand} c="dimmed" size="xs">
                Click to expand
              </Text>
            </Flex>
            <Collapse in={opened}>
              <Divider my="sm" variant="dashed" />
              <Text>{article.content}</Text>
              <Divider my="sm" variant="dashed" />
            </Collapse>
          </Box>
        </Grid.Col>
        <Grid.Col span={{ md: 12, lg: 4 }}>
          <Card>
            <Title className={classes.newsSubHeader}>In the News</Title>
            <Divider my="sm" variant="dotted" />
            {jokeArticles.map((jokeArticle, i) => {
              const isLastArticle = i === jokeArticles.length - 1;

              return (
                <a
                  className={classes.jokeArticleLink}
                  href={jokeArticle.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text span>
                    {jokeArticle.title}
                    <IconExternalLink className={classes.jokeArticleIcon} size={18} />
                  </Text>
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
