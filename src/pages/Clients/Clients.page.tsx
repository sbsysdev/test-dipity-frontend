/* react */
import { memo } from 'react';
/* hooks */
import { useClients } from './useClients.hook';
/* components */
import { ClientsHeader } from './ClientsHeader';
import { ClientList } from './ClientList';
/* styles */
import clientsStyles from './Clients.module.scss';

function Clients() {
    const {} = useClients();

    return (
        <div className={clientsStyles.Content}>
            <ClientsHeader />

            <ClientList />
        </div>
    );
}

export default memo(Clients);
