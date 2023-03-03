/* react */
import { useCallback } from 'react';
/* context */
import { useProductsContext } from '../Products/Products.context';

export function useDeleteProduct() {
    const { selectedProductToDelete, unselectProductToDelete } = useProductsContext();

    /* actions */
    const handleDeleteProduct = useCallback(() => {
        console.log(selectedProductToDelete);

        unselectProductToDelete();
    }, [selectedProductToDelete]);

    return { handleDeleteProduct };
}
