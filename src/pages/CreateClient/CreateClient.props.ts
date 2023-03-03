/* utils */
import * as yup from 'yup';

export interface CreateClientFormValues {
    name: string;
    lastname: string;
    email: string;
    address: string;
    phone: string;
}

export const CreateClientFormSchema = yup
    .object({
        name: yup.string().required('name.required'),
        lastname: yup.string().required('lastname.required'),
        email: yup.string().email('email.format').required('email.required'),
        address: yup.string().required('address.required'),
        phone: yup
            .string()
            .required('phone.required')
            .matches(/^(\+\d{3}-\d{4}-\d{4})$/, 'phone.format: +505-8877-6655'),
    })
    .required();
