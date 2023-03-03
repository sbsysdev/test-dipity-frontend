/* react */
import { createContext, useContext } from 'react';
/* props */
import { ClientsContextProps, ClientsProviderProps } from './Clients.props';

const Context = createContext<ClientsContextProps>({
    isCreateClient: false,
    openCreateClient: () => {},
    closeCreateClient: () => {},
    selectedClientToDelete: null,
    isSelectedClientToDelete: false,
    selectClientToDelete: (_) => () => {},
    unselectClientToDelete: () => {},
    selectedClientToEdit: null,
    isSelectedClientToEdit: false,
    selectClientToEdit: (_) => () => {},
    unselectClientToEdit: () => {},
    navigateToClientProducts: (_) => () => {},
});

export function ClientsProvider({ context, children }: ClientsProviderProps) {
    return (
        <Context.Provider value={context}>
            {typeof children === 'function' ? children() : children}
        </Context.Provider>
    );
}

export const useClientsContext = () => useContext(Context);
