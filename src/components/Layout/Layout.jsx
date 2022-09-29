import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { EmptyLibrary } from '../EmptyLibrary/EmptyLibrary';

export const Layout = () => {
    return (
        <>
            <Header />
            <EmptyLibrary/>
            <Outlet />
        </>
    );
};
