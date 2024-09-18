import { Blockquote, Avatar } from '@mantine/core';
import classes from './Interview.module.css';

interface Props {
  interviewerName: string;
  interviewerQuote: string;
  interviewerImage: string;
  intervieweeName: string;
  intervieweeQuote: string;
  intervieweeImage: string;
}

export default function Interview({
  interviewerName,
  interviewerQuote,
  interviewerImage,
  intervieweeName,
  intervieweeQuote,
  intervieweeImage,
}: Props) {
  const interviewerAvatar = <Avatar src={interviewerImage} />;
  const intervieweeAvatar = <Avatar src={intervieweeImage} />;

  return (
    <>
      <br />
      <Blockquote
        className={classes.quote}
        color="rgb(255, 156, 90)"
        radius="xs"
        cite={interviewerName}
        icon={interviewerAvatar}
      >
        {interviewerQuote}
      </Blockquote>
      <br />
      <Blockquote
        className={classes.quote}
        color="white"
        radius="xs"
        cite={intervieweeName}
        icon={intervieweeAvatar}
      >
        {intervieweeQuote}
      </Blockquote>
      <br />
    </>
  );
}
