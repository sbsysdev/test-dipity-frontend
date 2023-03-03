/* types */
import { Slot } from '@shared/types';

export interface ClientsContextProps {
    /* actions */
    isCreateClient: boolean;
    openCreateClient: () => void;
    closeCreateClient: () => void;

    selectedClientToDelete: {} | null;
    isSelectedClientToDelete: boolean;
    selectClientToDelete: (userId: string) => () => void;
    unselectClientToDelete: () => void;

    selectedClientToEdit: {} | null;
    isSelectedClientToEdit: boolean;
    selectClientToEdit: (userId: string) => () => void;
    unselectClientToEdit: () => void;

    navigateToClientProducts: (userId: string) => () => void;
}

export interface ClientsProviderProps {
    context: ClientsContextProps;
    children: Slot<undefined>;
}
