import { ReactNode } from 'react';
import { Text } from '@mantine/core';

interface Props {
    children: ReactNode;
    trailingBreak?: boolean;
}

export default function Paragraph({ children, trailingBreak = true }: Props) {
    return (
        <>
            <Text>
                {children}
            </Text>
            {trailingBreak && <br />}
        </>
    );
}
