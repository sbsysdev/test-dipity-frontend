/* react */
import { memo } from 'react';
/* styles */
import listStyles from './ClientList.module.scss';

function ClientList() {
    return <main className={listStyles.List}>ClientList</main>;
}

export default memo(ClientList);
