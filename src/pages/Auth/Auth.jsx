import {Navigate, useSearchParams} from 'react-router-dom';
import {token} from '../../redux/auth/token';
import {useDispatch} from 'react-redux';
import {refresh} from '../../redux/auth/auth-operations';

export const Auth = () => {
    const [searchParams] = useSearchParams();
    const tokenValue = searchParams.get('token');
    const dispatch = useDispatch();
    token.set(tokenValue)
    dispatch(refresh(tokenValue));
    return <><Navigate to={"/library"}/></>;
};
