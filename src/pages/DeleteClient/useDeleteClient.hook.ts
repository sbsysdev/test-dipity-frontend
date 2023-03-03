/* react */
import { useCallback } from 'react';
/* context */
import { useClientsContext } from '../Clients/Clients.context';

export function useDeleteClient() {
    const { selectedClientToDelete, unselectClientToDelete } = useClientsContext();

    /* actions */
    const handleDeleteClient = useCallback(() => {
        console.log(selectedClientToDelete);

        unselectClientToDelete();
    }, [selectedClientToDelete]);

    return { handleDeleteClient };
}
