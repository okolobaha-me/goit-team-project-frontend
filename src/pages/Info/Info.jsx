import {Navigate} from 'react-router-dom';
import {BooksInfo} from '../../components/BooksInfo';

const Info = () => {
    const wasLoggedIn = window.localStorage.getItem('wasLoggedIn');
    const redirectTo = wasLoggedIn ? '/signin' : '/signup';
    let isMobile = window.matchMedia('(max-width: 767px)').matches;

    return (
        <>
            {!isMobile && <Navigate to={redirectTo} />}
            <BooksInfo/>
        </>
    );
};

export default Info;
