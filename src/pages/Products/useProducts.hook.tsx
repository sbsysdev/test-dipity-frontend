/* react */
import { useMemo, useState } from 'react';
/* props */
import { ProductsContextProps } from './Products.props';
/* hooks */
import { useActive } from '@shared/hooks';

export function useProducts() {
    /* states/hooks */
    const [isCreateProduct, openCreateProduct, closeCreateProduct] = useActive();

    const [selectedProductToDelete, setSelectedProductToDelete] = useState<{} | null>(null);
    const isSelectedProductToDelete = useMemo(
        () => selectedProductToDelete !== null,
        [selectedProductToDelete]
    );

    const [selectedProductToEdit, setSelectedProductToEdit] = useState<{} | null>(null);
    const isSelectedProductToEdit = useMemo(
        () => selectedProductToEdit !== null,
        [selectedProductToEdit]
    );

    /* actions */
    function selectProductToDelete(productId: string) {
        return () => {
            setSelectedProductToDelete({ productId });
        };
    }

    function unselectProductToDelete() {
        setSelectedProductToDelete(null);
    }

    function selectProductToEdit(productId: string) {
        return () => {
            setSelectedProductToEdit({ productId });
        };
    }

    function unselectProductToEdit() {
        setSelectedProductToEdit(null);
    }

    /* context */
    const context: ProductsContextProps = {
        isCreateProduct,
        openCreateProduct,
        closeCreateProduct,

        selectedProductToDelete,
        isSelectedProductToDelete,
        selectProductToDelete,
        unselectProductToDelete,

        selectedProductToEdit,
        isSelectedProductToEdit,
        selectProductToEdit,
        unselectProductToEdit,
    };

    return { context };
}
