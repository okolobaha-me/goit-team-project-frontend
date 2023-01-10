import {Navigate} from 'react-router-dom';

export const PrivateRoute = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return <Navigate to="/signin" />;
    }

    return children;
};
