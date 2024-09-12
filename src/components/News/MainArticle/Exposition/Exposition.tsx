import { Text } from '@mantine/core';

interface Props {
    text: string;
    trailingBreak?: boolean;
}

export default function Exposition({ text, trailingBreak = true }: Props) {
    return (
        <>
            <Text fs="italic">
                **{text}**
            </Text>
            {trailingBreak && <br />}
        </>
    );
}
