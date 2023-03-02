/* react */
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
/* props */
import { SignInFormSchema, SignInFormValues } from './SignInForm.props';
/* hooks */
import { useForm } from 'react-hook-form';
import { useActive } from '@shared/hooks';
/* components */
import { FieldProps, Hint, Icon } from '@shared/components';
/* utils */
import { yupResolver } from '@hookform/resolvers/yup';
/* assets */
import { mdiEye, mdiEyeOff } from '@mdi/js';
/* styles */
import signInFormStyles from './SignInForm.module.scss';

export function useSignInForm() {
    /* states/hooks */
    const [isPasswordVisible, , , togglePasswordVisibility] = useActive();

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormValues>({
        resolver: yupResolver(SignInFormSchema),
    });

    /* actions */
    const handleSignIn = handleSubmit((data) => {
        console.log(data);

        navigate('/dashboard/clients', { replace: true });
    });

    /* props */
    const emailFieldProps = useMemo(
        (): FieldProps => ({
            inputContent: (props) => (
                <input placeholder="User email" type="email" {...register('email')} {...props} />
            ),
            hintContent: <Hint error={errors.email?.message} />,
        }),
        [register, errors.email?.message]
    );

    const passwordFieldProps = useMemo(
        (): FieldProps => ({
            inputContent: (props) => (
                <input
                    placeholder="Password"
                    type={isPasswordVisible ? 'text' : 'password'}
                    {...register('password')}
                    {...props}
                />
            ),
            afterContent: (props) => (
                <i
                    className={signInFormStyles.PasswordIcon}
                    onClick={togglePasswordVisibility}
                    {...props}>
                    <Icon path={isPasswordVisible ? mdiEyeOff : mdiEye} />
                </i>
            ),
            hintContent: <Hint error={errors.password?.message} />,
        }),
        [isPasswordVisible, togglePasswordVisibility, register, errors.password?.message]
    );

    const signInFields: FieldProps[] = [emailFieldProps, passwordFieldProps];

    return { handleSignIn, signInFields };
}
