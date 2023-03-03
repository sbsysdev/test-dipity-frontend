/* types */
import { Slot } from '@shared/types';

export interface ClientsContextProps {
    isCreateClient: boolean;
    openCreateClient: () => void;
    closeCreateClient: () => void;
    /* actions */
    selectClientToDelete: (userId: string) => () => void;
    selectClientToEdit: (userId: string) => () => void;
    navigateToClientProducts: (userId: string) => () => void;
}

export interface ClientsProviderProps {
    context: ClientsContextProps;
    children: Slot<undefined>;
}
