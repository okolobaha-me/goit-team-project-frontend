import { useSelector } from 'react-redux';

import { Route, Navigate } from 'react-router-dom';

import { Routes } from 'react-router-dom';

import { getIsLoggedIn } from '../src/redux/auth/auth-selectors';

export default function PrivateRoute({
    children,
    redirectTo = '/',
    ...routeProps
}) {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <Routes>
            <Route
                {...routeProps}
                element={isLoggedIn ? children : <Navigate to={redirectTo} />}
            ></Route>
        </Routes>
    );
}
