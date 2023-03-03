/* utils */
import * as yup from 'yup';

export interface EditProductFormValues {
    name: string;
    category: string;
    expires: Date;
    stock: number;
}

export const EditProductFormSchema = yup
    .object({
        name: yup.string().required('name.required'),
        category: yup.string().required('category.required'),
        expires: yup.date().typeError('expires.required').required('expires.required'),
        stock: yup
            .number()
            .typeError('stock.required')
            .required('stock.required')
            .min(0, 'stock.min'),
    })
    .required();
