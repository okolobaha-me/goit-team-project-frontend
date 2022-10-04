import {ScreenWidth} from './Info.styled';
import {Navigate} from 'react-router-dom';

const Info = () => {
    const wasLoggedIn = window.localStorage.getItem('wasLoggedIn');
    const redirectTo = wasLoggedIn ? '/signin' : '/signup';
    let isMobile = window.matchMedia('(max-width: 767px)').matches;

    return (
        <>
            <ScreenWidth />
            {!isMobile && <Navigate to={redirectTo} />}
            <h1>Info</h1>
        </>
    );
};

export default Info;
