/* react */
import { createContext, useContext } from 'react';
/* props */
import { ClientsContextProps, ClientsProviderProps } from './Clients.props';

const Context = createContext<ClientsContextProps>({
    selectClientToDelete: (_) => () => {},
    selectClientToEdit: (_) => () => {},
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
