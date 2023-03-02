/* utils */
import * as yup from 'yup';

export interface SignInFormValues {
    email: string;
    password: string;
}

export const SignInFormSchema = yup
    .object({
        email: yup.string().email('email.format').required('email.required'),
        password: yup.string().required('password.required').min(9, 'password.min'),
    })
    .required();
