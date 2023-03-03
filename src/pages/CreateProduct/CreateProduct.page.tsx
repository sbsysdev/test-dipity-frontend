/* react */
import { memo } from 'react';
/* context */
import { useProductsContext } from '../Products/Products.context';
/* hooks */
import { useCreateProduct } from './useCreateProduct.hook';
/* components */
import { Field, Icon } from '@shared/components';
/* assets */
import { mdiCloseBox, mdiFolder } from '@mdi/js';
/* styles */
import createStyles from './CreateProduct.module.scss';

function CreateProduct() {
    const { handleCreateProduct, createProductFields } = useCreateProduct();

    const { closeCreateProduct } = useProductsContext();

    return (
        <div className={createStyles.Create}>
            <h2>Create client product</h2>

            <hr />

            <form onSubmit={handleCreateProduct}>
                <fieldset>
                    {createProductFields.map((props, index) => (
                        <Field key={`CreateProduct_${index}`} {...props} />
                    ))}
                </fieldset>

                <hr />

                <div>
                    <button
                        type="button"
                        className={createStyles.Cancel}
                        onClick={closeCreateProduct}>
                        <i>
                            <Icon path={mdiCloseBox} />
                        </i>

                        <span>Cancel</span>
                    </button>

                    <button type="submit" className={createStyles.Save}>
                        <i>
                            <Icon path={mdiFolder} />
                        </i>

                        <span>Save</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default memo(CreateProduct);
