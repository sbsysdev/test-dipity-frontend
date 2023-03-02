/* react */
import { memo } from 'react';
/* components */
import { Button } from '@shared/components';

function App() {
    return (
        <div>
            <Button>Hello World!</Button>
        </div>
    );
}

export default memo(App);
