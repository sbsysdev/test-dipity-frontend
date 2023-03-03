/* react */
import { memo } from 'react';
/* context */
import { useClientsContext } from '../Clients/Clients.context';
/* hooks */
import { useCreateClient } from './useCreateClient.hook';
/* components */
import { Field, Icon } from '@shared/components';
/* assets */
import { mdiCloseBox, mdiFolder } from '@mdi/js';
/* styles */
import createStyles from './CreateClient.module.scss';

function CreateClient() {
    const { handleCreateClient, createClientFields } = useCreateClient();

    const { closeCreateClient } = useClientsContext();

    return (
        <div className={createStyles.Create}>
            <h2>Create client</h2>

            <hr />

            <form onSubmit={handleCreateClient}>
                <fieldset>
                    {createClientFields.map((props, index) => (
                        <Field key={`SignUp_${index}`} {...props} />
                    ))}
                </fieldset>

                <hr />

                <div>
                    <button
                        type="button"
                        className={createStyles.Cancel}
                        onClick={closeCreateClient}>
                        <i>
                            <Icon path={mdiCloseBox} />
                        </i>

                        <span>Cancel</span>
                    </button>

                    <button type="submit" className={createStyles.Save}>
                        <i>
                            <Icon path={mdiFolder} />
                        </i>

                        <span>Save</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default memo(CreateClient);
