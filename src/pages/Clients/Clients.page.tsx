/* react */
import { memo } from 'react';
/* context */
import { ClientsProvider } from './Clients.context';
/* hooks */
import { useClients } from './useClients.hook';
/* layouts */
import { ModalLayout } from '@shared/layouts';
/* components */
import { ClientsHeader } from './ClientsHeader';
import { ClientList } from './ClientList';
import { CreateClientPage } from '../CreateClient';
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

            <ModalLayout
                isVisible={context.isCreateClient}
                hasIndentation
                rowAlignment="center"
                colAlignment="center">
                <CreateClientPage />
            </ModalLayout>
        </ClientsProvider>
    );
}

export default memo(Clients);
