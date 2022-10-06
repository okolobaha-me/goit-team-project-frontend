import {Navigate} from 'react-router-dom';

export const PublicRoute = ({ isLoggedIn, children }) => {
    if (isLoggedIn) {
        return <Navigate to="/library" replace />;
    }

    return children;
};
