/* react */
import { memo } from 'react';
/* context */
import { useProductsContext } from '../Products.context';
/* components */
import { Icon } from '@shared/components';
/* assets */
import { mdiFileDocumentRemove, mdiFileEdit } from '@mdi/js';
/* styles */
import actionStyles from './ProductActions.module.scss';

function ProductActions({ productId }: { productId: string }) {
    const { selectProductToDelete, selectProductToEdit } = useProductsContext();

    return (
        <div className={actionStyles.Actions}>
            <button
                className={actionStyles.Delete}
                title="Delete"
                onClick={selectProductToDelete(productId)}>
                <i>
                    <Icon path={mdiFileDocumentRemove} />
                </i>

                <span>Delete</span>
            </button>

            <button
                className={actionStyles.Edit}
                title="Edit"
                onClick={selectProductToEdit(productId)}>
                <i>
                    <Icon path={mdiFileEdit} />
                </i>

                <span>Edit</span>
            </button>
        </div>
    );
}

export default memo(ProductActions);
