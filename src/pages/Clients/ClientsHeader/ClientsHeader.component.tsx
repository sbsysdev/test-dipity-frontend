/* react */
import { memo } from 'react';
/* components */
import { Field } from '@shared/components';
/* styles */
import headerStyles from './ClientsHeader.module.scss';

function ClientsHeader() {
    return (
        <header className={headerStyles.Header}>
            <h1>Clients</h1>

            <form onSubmit={(event) => event.preventDefault()}>
                <Field
                    inputContent={(props) => (
                        <input placeholder="Filter by client's name" {...props} />
                    )}
                />
            </form>
        </header>
    );
}

export default memo(ClientsHeader);
