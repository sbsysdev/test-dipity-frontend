/* react */
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
/* props */
import { ClientsContextProps } from './Clients.props';
/* hooks */
import { useActive } from '@shared/hooks';

export function useClients() {
    /* states/hooks */
    const [isCreateClient, openCreateClient, closeCreateClient] = useActive();

    const [selectedClientToDelete, setSelectedClientToDelete] = useState<{} | null>(null);
    const isSelectedClientToDelete = useMemo(
        () => selectedClientToDelete !== null,
        [selectedClientToDelete]
    );

    const [selectedClientToEdit, setSelectedClientToEdit] = useState<{} | null>(null);
    const isSelectedClientToEdit = useMemo(
        () => selectedClientToEdit !== null,
        [selectedClientToEdit]
    );

    const navigate = useNavigate();

    /* actions */
    function selectClientToDelete(userId: string) {
        return () => {
            setSelectedClientToDelete({ userId });
        };
    }

    function unselectClientToDelete() {
        setSelectedClientToDelete(null);
    }

    function selectClientToEdit(userId: string) {
        return () => {
            setSelectedClientToEdit({ userId });
        };
    }

    function unselectClientToEdit() {
        setSelectedClientToEdit(null);
    }

    function navigateToClientProducts(userId: string) {
        return () => {
            navigate(`${userId}/products`);
        };
    }

    /* context */
    const context: ClientsContextProps = {
        isCreateClient,
        openCreateClient,
        closeCreateClient,

        selectedClientToDelete,
        isSelectedClientToDelete,
        selectClientToDelete,
        unselectClientToDelete,

        selectedClientToEdit,
        isSelectedClientToEdit,
        selectClientToEdit,
        unselectClientToEdit,

        navigateToClientProducts,
    };

    return { context };
}
