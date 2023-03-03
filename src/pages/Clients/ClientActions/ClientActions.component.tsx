/* react */
import { memo } from 'react';
/* context */
import { useClientsContext } from '../Clients.context';
/* components */
import { Icon } from '@shared/components';
/* assets */
import { mdiFileDocumentMultiple, mdiFileDocumentRemove, mdiFileEdit } from '@mdi/js';
/* styles */
import actionStyles from './ClientActions.module.scss';

function ClientActions({ userId }: { userId: string }) {
    const { selectClientToDelete, selectClientToEdit, navigateToClientProducts } =
        useClientsContext();

    return (
        <div className={actionStyles.Actions}>
            <button
                className={actionStyles.Delete}
                title="Delete"
                onClick={selectClientToDelete(userId)}>
                <i>
                    <Icon path={mdiFileDocumentRemove} />
                </i>

                <span>Delete</span>
            </button>

            <button className={actionStyles.Edit} title="Edit" onClick={selectClientToEdit(userId)}>
                <i>
                    <Icon path={mdiFileEdit} />
                </i>

                <span>Edit</span>
            </button>

            <button
                className={actionStyles.Products}
                title="Products"
                onClick={navigateToClientProducts(userId)}>
                <i>
                    <Icon path={mdiFileDocumentMultiple} />
                </i>

                <span>Products</span>
            </button>
        </div>
    );
}

export default memo(ClientActions);
