/* react */
import { memo } from 'react';
/* context */
import { useClientsContext } from '../Clients/Clients.context';
/* hooks */
import { useDeleteClient } from './useDeleteClient.hook';
/* components */
import { Icon } from '@shared/components';
/* assets */
import { mdiCloseBox, mdiDelete } from '@mdi/js';
/* styles */
import deleteStyles from './DeleteClient.module.scss';

function DeleteClient() {
    const { handleDeleteClient } = useDeleteClient();

    const { unselectClientToDelete } = useClientsContext();

    return (
        <div className={deleteStyles.DeleteClient}>
            <h2>Delete client</h2>

            <hr />

            <span>Are you sure to delete the selected client?</span>

            <span>{'Client name'}</span>

            <hr />

            <div>
                <button
                    type="button"
                    className={deleteStyles.Cancel}
                    onClick={unselectClientToDelete}>
                    <i>
                        <Icon path={mdiCloseBox} />
                    </i>

                    <span>Cancel</span>
                </button>

                <button type="button" className={deleteStyles.Delete} onClick={handleDeleteClient}>
                    <i>
                        <Icon path={mdiDelete} />
                    </i>

                    <span>Delete</span>
                </button>
            </div>
        </div>
    );
}

export default memo(DeleteClient);
