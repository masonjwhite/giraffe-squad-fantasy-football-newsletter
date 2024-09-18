import { Image, Text } from '@mantine/core';
import classes from './Image.module.css';

interface Props {
  src: string;
  caption?: string | null;
}

export default function Demo({ src, caption }: Props) {
  return (
    <div className={classes.imageContainer}>
      <div>
        <Image className={classes.image} src={src} fit="contain" radius="md" />
        {caption && (
          <Text c="dimmed" size="xs">
            {caption}
          </Text>
        )}
      </div>
    </div>
  );
}
