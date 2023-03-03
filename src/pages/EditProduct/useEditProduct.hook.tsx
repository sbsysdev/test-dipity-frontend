/* react */
import { useMemo } from 'react';
/* context */
import { useProductsContext } from '../Products/Products.context';
/* props */
import { EditProductFormSchema, EditProductFormValues } from './EditProduct.props';
/* hooks */
import { useForm } from 'react-hook-form';
/* components */
import { FieldProps, Hint } from '@shared/components';
/* utils */
import { yupResolver } from '@hookform/resolvers/yup';

const categories = ['Electronics', 'Groceries', 'Severals'];

export function useEditProduct() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EditProductFormValues>({
        resolver: yupResolver(EditProductFormSchema),
    });

    const { selectedProductToEdit } = useProductsContext();
    console.log(selectedProductToEdit);

    /* actions */
    const handleEditProduct = handleSubmit((data) => {
        console.log(data);
    });

    /* props */
    const nameFieldProps = useMemo(
        (): FieldProps => ({
            inputContent: (props) => (
                <input placeholder="Product name" {...register('name')} {...props} />
            ),
            hintContent: <Hint error={errors.name?.message} />,
        }),
        [register, errors.name?.message]
    );

    const categoryFieldProps = useMemo(
        (): FieldProps => ({
            inputContent: (props) => (
                <select {...register('category')} {...props}>
                    <option value="" hidden>
                        Select category
                    </option>

                    {categories.map((category, index) => (
                        <option key={`Category_${index}`} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            ),
            hintContent: <Hint error={errors.category?.message} />,
        }),
        [register, errors.category?.message]
    );

    const expiresFieldProps = useMemo(
        (): FieldProps => ({
            inputContent: (props) => (
                <input placeholder="Expires" type="date" {...register('expires')} {...props} />
            ),
            hintContent: <Hint error={errors.expires?.message} />,
        }),
        [register, errors.expires?.message]
    );

    const stockFieldProps = useMemo(
        (): FieldProps => ({
            inputContent: (props) => (
                <input
                    placeholder="In stock"
                    type="number"
                    min={0}
                    step={1}
                    defaultValue={0}
                    {...register('stock')}
                    {...props}
                />
            ),
            hintContent: <Hint error={errors.stock?.message} />,
        }),
        [register, errors.stock?.message]
    );

    const createEditFields: FieldProps[] = [
        nameFieldProps,
        categoryFieldProps,
        expiresFieldProps,
        stockFieldProps,
    ];

    return { handleEditProduct, createEditFields };
}
