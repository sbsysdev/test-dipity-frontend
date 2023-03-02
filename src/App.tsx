/* react */
import { memo } from 'react';
/* components */
import { Field } from '@shared/components';
/* styles */
import styles from './App.module.scss';

function App() {
    return (
        <>
            <Field
                className={styles.Field}
                hasError
                inputContent={(props) => <input {...props} />}
            />
        </>
    );
}

export default memo(App);
