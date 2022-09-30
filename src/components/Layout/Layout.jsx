import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import SignIn from '../../pages/SignIn';

export const Layout = () => {
    return (
        <>
            <Header />
            <SignIn />
            <Outlet />
        </>
    );
};
