/* react */
import { useNavigate } from 'react-router-dom';
/* props */
import { ClientsContextProps } from './Clients.props';

export function useClients() {
    /* states/hooks */
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
        selectClientToDelete,
        selectClientToEdit,
        navigateToClientProducts,
    };

    return { context };
}
