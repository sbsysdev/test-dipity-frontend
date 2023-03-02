/* react */
import { memo, useEffect } from 'react';
import { createBrowserRouter, Outlet, useNavigate, RouterProvider } from 'react-router-dom';
/* pages */
import { SignInPage } from './pages';

/* root component */
const Root = memo(() => {
    /* states/hooks */
    const navigate = useNavigate();

    /* reactivity */
    useEffect(() => {
        navigate('/auth/sign-in', { replace: true });
    }, []);

    return <Outlet />;
});

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <h1>Not found!</h1>,
        children: [
            {
                path: 'auth/sign-in',
                element: <SignInPage />,
            },
            {
                path: 'auth/sign-up',
                element: <h1>Sign Up</h1>,
            },
        ],
    },
]);

function Routes() {
    return <RouterProvider router={router} />;
}

export default memo(Routes);
