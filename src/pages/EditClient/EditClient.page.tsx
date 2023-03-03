/* react */
import { memo } from 'react';
/* context */
import { useClientsContext } from '../Clients/Clients.context';
/* hooks */
import { useEditClient } from './useEditClient.hook';
/* components */
import { Field, Icon } from '@shared/components';
/* assets */
import { mdiCloseBox, mdiUpdate } from '@mdi/js';
/* styles */
import createStyles from './EditClient.module.scss';

function EditClient() {
    const { handleEditClient, editClientFields } = useEditClient();

    const { unselectClientToEdit } = useClientsContext();

    return (
        <div className={createStyles.Edit}>
            <h2>Edit client</h2>

            <hr />

            <form onSubmit={handleEditClient}>
                <fieldset>
                    {editClientFields.map((props, index) => (
                        <Field key={`EditClient_${index}`} {...props} />
                    ))}
                </fieldset>

                <hr />

                <div>
                    <button
                        type="button"
                        className={createStyles.Cancel}
                        onClick={unselectClientToEdit}>
                        <i>
                            <Icon path={mdiCloseBox} />
                        </i>

                        <span>Cancel</span>
                    </button>

                    <button type="submit" className={createStyles.Update}>
                        <i>
                            <Icon path={mdiUpdate} />
                        </i>

                        <span>Update</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default memo(EditClient);
