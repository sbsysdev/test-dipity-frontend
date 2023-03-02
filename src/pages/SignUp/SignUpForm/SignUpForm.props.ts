/* utils */
import * as yup from 'yup';

export interface SignUpFormValues {
    name: string;
    lastname: string;
    email: string;
    password: string;
}

export const SignUpFormSchema = yup
    .object({
        name: yup.string().required('email.required'),
        lastname: yup.string().required('email.required'),
        email: yup.string().email('email.format').required('email.required'),
        password: yup
            .string()
            .required('password.required')
            .min(9, 'password.min')
            .matches(/^(.*[A-Z][^A-Z]{1,}[A-Z]).*$/, 'password.uppercase')
            .matches(/^(.*[\d][^\d]{1,}[\d][^\d]{1,}[\d]).*$/, 'password.number')
            .matches(/^[^'\`,"\\\/*.><]*$/, 'password.notallowed'),
    })
    .required();
