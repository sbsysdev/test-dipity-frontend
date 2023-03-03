/* react */
import { memo } from 'react';
/* context */
import { useProductsContext } from '../Products/Products.context';
/* hooks */
import { useDeleteProduct } from './useDeleteProduct.hook';
/* components */
import { Icon } from '@shared/components';
/* assets */
import { mdiCloseBox, mdiDelete } from '@mdi/js';
/* styles */
import deleteStyles from './DeleteProduct.module.scss';

function DeleteProduct() {
    const { handleDeleteProduct } = useDeleteProduct();

    const { unselectProductToDelete } = useProductsContext();

    return (
        <div className={deleteStyles.DeleteProduct}>
            <h2>Delete client product</h2>

            <hr />

            <span>Are you sure to delete the selected product?</span>

            <span>{'Product name'}</span>

            <hr />

            <div>
                <button
                    type="button"
                    className={deleteStyles.Cancel}
                    onClick={unselectProductToDelete}>
                    <i>
                        <Icon path={mdiCloseBox} />
                    </i>

                    <span>Cancel</span>
                </button>

                <button type="button" className={deleteStyles.Delete} onClick={handleDeleteProduct}>
                    <i>
                        <Icon path={mdiDelete} />
                    </i>

                    <span>Delete</span>
                </button>
            </div>
        </div>
    );
}

export default memo(DeleteProduct);
