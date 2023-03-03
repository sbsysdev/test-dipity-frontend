/* react */
import { createContext, useContext } from 'react';
/* props */
import { ProductsContextProps, ProductsProviderProps } from './Products.props';

const Context = createContext<ProductsContextProps>({
    isCreateProduct: false,
    openCreateProduct: () => {},
    closeCreateProduct: () => {},
    selectedProductToDelete: null,
    isSelectedProductToDelete: false,
    selectProductToDelete: (_) => () => {},
    unselectProductToDelete: () => {},
    selectedProductToEdit: null,
    isSelectedProductToEdit: false,
    selectProductToEdit: (_) => () => {},
    unselectProductToEdit: () => {},
});

export function ProductsProvider({ context, children }: ProductsProviderProps) {
    return (
        <Context.Provider value={context}>
            {typeof children === 'function' ? children() : children}
        </Context.Provider>
    );
}

export const useProductsContext = () => useContext(Context);
