/* types */
import { Slot } from '@shared/types';

export interface ProductsContextProps {
    /* actions */
    isCreateProduct: boolean;
    openCreateProduct: () => void;
    closeCreateProduct: () => void;

    selectedProductToDelete: {} | null;
    isSelectedProductToDelete: boolean;
    selectProductToDelete: (productId: string) => () => void;
    unselectProductToDelete: () => void;

    selectedProductToEdit: {} | null;
    isSelectedProductToEdit: boolean;
    selectProductToEdit: (productId: string) => () => void;
    unselectProductToEdit: () => void;
}

export interface ProductsProviderProps {
    context: ProductsContextProps;
    children: Slot<undefined>;
}
