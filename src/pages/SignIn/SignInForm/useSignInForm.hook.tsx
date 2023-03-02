/* react */
import { FormEvent, useMemo } from 'react';
/* hooks */
import { useActive } from '@shared/hooks';
/* components */
import { FieldProps, Icon } from '@shared/components';
/* assets */
import { mdiEye, mdiEyeOff } from '@mdi/js';
/* styles */
import signInFormStyles from './SignInForm.module.scss';

export function useSignInForm() {
    const [isPasswordVisible, , , togglePasswordVisibility] = useActive();

    /* actions */
    const handleSignIn = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

    /* props */
    const emailFieldProps = useMemo(
        (): FieldProps => ({
            inputContent: (props) => <input placeholder="User email" type="email" {...props} />,
        }),
        []
    );

    const passwordFieldProps = useMemo(
        (): FieldProps => ({
            inputContent: (props) => (
                <input
                    placeholder="Password"
                    type={isPasswordVisible ? 'text' : 'password'}
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
        }),
        [isPasswordVisible, togglePasswordVisibility]
    );

    const signInFields: FieldProps[] = [emailFieldProps, passwordFieldProps];

    return { handleSignIn, signInFields };
}
