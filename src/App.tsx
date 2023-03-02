/* react */
import { memo } from 'react';
/* components */
import { Button } from '@shared/components';

function App() {
    return (
        <>
            <Button>Hello World!</Button>
        </>
    );
}

export default memo(App);
