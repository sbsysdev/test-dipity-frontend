/* react */
import { memo } from 'react';
/* context */
import { ClientsProvider } from './Clients.context';
/* hooks */
import { useClients } from './useClients.hook';
/* components */
import { ClientsHeader } from './ClientsHeader';
import { ClientList } from './ClientList';
/* styles */
import clientsStyles from './Clients.module.scss';

function Clients() {
    const { context } = useClients();

    return (
        <ClientsProvider context={context}>
            <div className={clientsStyles.Content}>
                <ClientsHeader />

                <ClientList />
            </div>
        </ClientsProvider>
    );
}

export default memo(Clients);
