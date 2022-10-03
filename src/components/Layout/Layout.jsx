import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import Timer from '../Timer/Timer'
export const Layout = () => {
    return (
        <>
            <Header />
            <Timer/>
            <Outlet />
        </>
    );
};
