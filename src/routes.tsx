/* react */
import { memo, useEffect } from 'react';
import { createBrowserRouter, Outlet, useNavigate, RouterProvider } from 'react-router-dom';
/* pages */
import { ClientsPage, SignInPage, SignUpPage } from './pages';

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
                element: <SignUpPage />,
            },
            {
                path: 'dashboard/clients',
                element: <ClientsPage />,
            },
        ],
    },
]);

function Routes() {
    return <RouterProvider router={router} />;
}

export default memo(Routes);
