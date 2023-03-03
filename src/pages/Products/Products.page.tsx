/* react */
import { memo } from 'react';
/* context */
import { ProductsProvider } from './Products.context';
/* hooks */
import { useProducts } from './useProducts.hook';
/* layouts */
/* import { ModalLayout } from '@shared/layouts'; */
/* components */
import { ProductsHeader } from './ProductsHeader';
import { ProductList } from './ProductList';
/* import { CreateProductPage } from '../CreateProduct';
import { DeleteProductPage } from '../DeleteProduct';
import { EditProductPage } from '../EditProduct'; */
/* styles */
import productsStyles from './Products.module.scss';

function Products() {
    const { context } = useProducts();

    return (
        <ProductsProvider context={context}>
            <div className={productsStyles.Content}>
                <ProductsHeader />

                <ProductList />
            </div>

            {/* <ModalLayout
                isVisible={context.isCreateProduct}
                hasIndentation
                rowAlignment="center"
                colAlignment="center">
                <CreateProductPage />
            </ModalLayout> */}

            {/* <ModalLayout
                isVisible={context.isSelectedProductToDelete}
                hasIndentation
                rowAlignment="center"
                colAlignment="center">
                <DeleteProductPage />
            </ModalLayout> */}

            {/* <ModalLayout
                isVisible={context.isSelectedProductToEdit}
                hasIndentation
                rowAlignment="center"
                colAlignment="center">
                <EditProductPage />
            </ModalLayout> */}
        </ProductsProvider>
    );
}

export default memo(Products);
