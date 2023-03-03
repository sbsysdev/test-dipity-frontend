/* react */
import { memo } from 'react';
/* context */
import { useProductsContext } from '../Products.context';
/* components */
import { Field } from '@shared/components';
/* styles */
import headerStyles from './ProductsHeader.module.scss';

function ProductsHeader() {
    const { openCreateProduct } = useProductsContext();

    return (
        <header className={headerStyles.Header}>
            <h1>{'Client name'}'s product list</h1>

            <form onSubmit={(event) => event.preventDefault()}>
                <Field
                    inputContent={(props) => (
                        <input placeholder="Filter by product's name" {...props} />
                    )}
                />

                <button type="button" onClick={openCreateProduct}>
                    Create Product
                </button>
            </form>
        </header>
    );
}

export default memo(ProductsHeader);
