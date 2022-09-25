import { ScreenWidth } from './Info.styled';
import { useRef, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Info = () => {
    const [shouldRedirect, SetShouldRedirect] = useState();
    const screenWidth = useRef(null);

    useEffect(() => {
        SetShouldRedirect(screenWidth.current.clientWidth >= 768);
    }, []);

    return (
        <>
            <ScreenWidth ref={screenWidth} />
            {shouldRedirect && <Navigate to={'/signup'} />}
            <h1>Info</h1>
        </>
    );
};

export default Info;
