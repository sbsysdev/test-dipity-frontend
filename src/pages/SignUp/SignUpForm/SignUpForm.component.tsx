/* react */
import { memo } from 'react';
import { Link } from 'react-router-dom';
/* hooks */
import { useSignUpForm } from './useSignUpForm.hook';
/* components */
import { Field } from '@shared/components';
/* styles */
import formStyles from './SignUpForm.module.scss';

function Form() {
    const { handleSignUp, signUpFields } = useSignUpForm();

    return (
        <form className={formStyles.Form} onSubmit={handleSignUp}>
            <h1>Sign up</h1>

            <hr />

            <fieldset>
                {signUpFields.map((props, index) => (
                    <Field key={`SignUp_${index}`} {...props} />
                ))}
            </fieldset>

            <button type="submit">Sing up</button>

            <hr />

            <span>
                <span>Do you already have an account? </span>

                <Link to="/auth/sign-in">sign in here</Link>
            </span>
        </form>
    );
}

export default memo(Form);
