/* react */
import { memo } from 'react';
/* hooks */
import { useSignUp } from './useSignUp.hook';
/* components */
import { SignUpForm } from './SignUpForm';
/* styles */
import signUpStyles from './SignUp.module.scss';

function SignUpPage() {
    const {} = useSignUp();

    return (
        <div className={signUpStyles.Content}>
            <main>
                <SignUpForm />
            </main>

            <footer>Steven @ Bustillo</footer>
        </div>
    );
}

export default memo(SignUpPage);
