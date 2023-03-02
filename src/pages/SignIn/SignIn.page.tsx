/* react */
import { memo } from 'react';
/* hooks */
import { useSignIn } from './useSignIn.hook';
/* components */
import { SignInForm } from './SignInForm';
/* styles */
import signInStyles from './SignIn.module.scss';

function SignInPage() {
    const {} = useSignIn();

    return (
        <div className={signInStyles.Content}>
            <main>
                <SignInForm />
            </main>

            <footer>Steven @ Bustillo</footer>
        </div>
    );
}

export default memo(SignInPage);
