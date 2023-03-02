/* react */
import { useMemo } from 'react';
/* props */
import { SignUpFormSchema, SignUpFormValues } from './SignUpForm.props';
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
import signUpFormStyles from './SignUpForm.module.scss';

export function useSignUpForm() {
    /* states/hooks */
    const [isPasswordVisible, , , togglePasswordVisibility] = useActive();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormValues>({
        resolver: yupResolver(SignUpFormSchema),
    });

    /* actions */
    const handleSignUp = handleSubmit((data) => {
        console.log(data);
    });

    /* props */
    const nameFieldProps = useMemo(
        (): FieldProps => ({
            inputContent: (props) => <input placeholder="Name" {...register('name')} {...props} />,
            hintContent: <Hint error={errors.name?.message} />,
        }),
        [register, errors.name?.message]
    );

    const lastNameFieldProps = useMemo(
        (): FieldProps => ({
            inputContent: (props) => (
                <input placeholder="Last name" {...register('lastname')} {...props} />
            ),
            hintContent: <Hint error={errors.lastname?.message} />,
        }),
        [register, errors.lastname?.message]
    );

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
                    className={signUpFormStyles.PasswordIcon}
                    onClick={togglePasswordVisibility}
                    {...props}>
                    <Icon path={isPasswordVisible ? mdiEyeOff : mdiEye} />
                </i>
            ),
            hintContent: <Hint error={errors.password?.message} />,
        }),
        [isPasswordVisible, togglePasswordVisibility, register, errors.password?.message]
    );

    const signUpFields: FieldProps[] = [
        nameFieldProps,
        lastNameFieldProps,
        emailFieldProps,
        passwordFieldProps,
    ];

    return { handleSignUp, signUpFields };
}
