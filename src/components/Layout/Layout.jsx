import {Outlet} from 'react-router-dom';
import {Header} from '../Header/Header';
import BookInfo from '../BooksInfo';

export const Layout = () => {
    return (
        <>
            <Header />
            <BookInfo />
            <Outlet />
        </>
    );
};
