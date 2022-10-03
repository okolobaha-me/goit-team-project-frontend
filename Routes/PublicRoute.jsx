import { useSelector } from 'react-redux';

import { Routes, Route, Navigate } from 'react-router-dom';

import { getIsLoggedIn } from '../redux/auth/auth-selectors';

export default function PublicRoute({
    children,
    restricted = false,
    redirectTo = '/',
    ...routeProps
}) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const willRedirect = isLoggedIn && restricted;

    return (
        <Routes>
            <Route
                {...routeProps}
                element={willRedirect ? <Navigate to={redirectTo} /> : children}
            ></Route>
        </Routes>
    );
}
