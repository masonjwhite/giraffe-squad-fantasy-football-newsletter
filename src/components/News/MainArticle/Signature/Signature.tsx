import { IconCircleFilled } from '@tabler/icons-react';
import classes from './Signature.module.css';

export default function Signature() {
    return (
        <>
            <div className={classes.signatureContainer}>
                <IconCircleFilled size="10" />
                <IconCircleFilled size="10" />
                <IconCircleFilled size="10" />
            </div>
            <br />
        </>
    );
}
