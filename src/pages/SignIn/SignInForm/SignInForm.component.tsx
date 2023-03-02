/* react */
import { memo } from 'react';
import { Link } from 'react-router-dom';
/* hooks */
import { useSignInForm } from './useSignInForm.hook';
/* components */
import { Field } from '@shared/components';
/* styles */
import formStyles from './SignInForm.module.scss';

function Form() {
    const { handleSignIn, signInFields } = useSignInForm();

    return (
        <form className={formStyles.Form} onSubmit={handleSignIn}>
            <h1>Sign in</h1>

            <hr />

            <fieldset>
                {signInFields.map((props, index) => (
                    <Field key={`SignIn_${index}`} {...props} />
                ))}
            </fieldset>

            <button type="submit">Sing in</button>

            <hr />

            <span>
                <span>You don't have an account yet? </span>

                <Link to="/auth/sign-up">create one right now</Link>
            </span>
        </form>
    );
}

export default memo(Form);
