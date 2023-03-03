/* react */
import { memo } from 'react';
/* context */
import { useProductsContext } from '../Products/Products.context';
/* hooks */
import { useEditProduct } from './useEditProduct.hook';
/* components */
import { Field, Icon } from '@shared/components';
/* assets */
import { mdiCloseBox, mdiUpdate } from '@mdi/js';
/* styles */
import editStyles from './EditProduct.module.scss';

function EditProduct() {
    const { handleEditProduct, createEditFields } = useEditProduct();

    const { unselectProductToEdit } = useProductsContext();

    return (
        <div className={editStyles.Edit}>
            <h2>Edit client product</h2>

            <hr />

            <form onSubmit={handleEditProduct}>
                <fieldset>
                    {createEditFields.map((props, index) => (
                        <Field key={`EditProduct_${index}`} {...props} />
                    ))}
                </fieldset>

                <hr />

                <div>
                    <button
                        type="button"
                        className={editStyles.Cancel}
                        onClick={unselectProductToEdit}>
                        <i>
                            <Icon path={mdiCloseBox} />
                        </i>

                        <span>Cancel</span>
                    </button>

                    <button type="submit" className={editStyles.Update}>
                        <i>
                            <Icon path={mdiUpdate} />
                        </i>

                        <span>Update</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default memo(EditProduct);
