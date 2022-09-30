import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import Info from '../../pages/Info/Info';

export const Layout = () => {
    return (
        <>
            <Header />
            <Info />
            <Outlet />
        </>
    );
};
