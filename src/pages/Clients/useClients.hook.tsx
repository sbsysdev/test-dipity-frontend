/* react */
import { useNavigate } from 'react-router-dom';
/* props */
import { ClientsContextProps } from './Clients.props';
/* hooks */
import { useActive } from '@shared/hooks';

export function useClients() {
    /* states/hooks */
    const [isCreateClient, openCreateClient, closeCreateClient] = useActive();

    const navigate = useNavigate();

    /* actions */
    function selectClientToDelete(userId: string) {
        return () => {
            console.log('TODO: Select user to delete');
        };
    }

    function selectClientToEdit(userId: string) {
        return () => {
            navigate(`${userId}/edit`);
        };
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
        selectClientToDelete,
        selectClientToEdit,
        navigateToClientProducts,
    };

    return { context };
}
