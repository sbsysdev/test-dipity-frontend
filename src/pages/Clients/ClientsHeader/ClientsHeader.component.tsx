/* react */
import { memo } from 'react';
/* context */
import { useClientsContext } from '../Clients.context';
/* components */
import { Field } from '@shared/components';
/* styles */
import headerStyles from './ClientsHeader.module.scss';

function ClientsHeader() {
    const { openCreateClient } = useClientsContext();

    return (
        <header className={headerStyles.Header}>
            <h1>Client list</h1>

            <form onSubmit={(event) => event.preventDefault()}>
                <Field
                    inputContent={(props) => (
                        <input placeholder="Filter by client's name" {...props} />
                    )}
                />

                <button type="button" onClick={openCreateClient}>
                    Create Client
                </button>
            </form>
        </header>
    );
}

export default memo(ClientsHeader);
