import { Blockquote } from '@mantine/core';
import classes from './Interview.module.css';

interface Props {
    interviewerName: string;
    interviewerQuote: string;
    intervieweeName: string;
    intervieweeQuote: string;
}

export default function Interview({
    interviewerQuote,
    interviewerName,
    intervieweeQuote,
    intervieweeName,
}: Props) {
    return (
        <>
            <Blockquote
              className={classes.quote}
              color="rgb(255, 156, 90)"
              radius="xs"
              cite={interviewerName}
            >
                {interviewerQuote}
            </Blockquote>
            <br />
            <Blockquote
              className={classes.quote}
              color="white"
              radius="xs"
              cite={intervieweeName}
            >
                {intervieweeQuote}
            </Blockquote>
            <br />
        </>
    );
}
