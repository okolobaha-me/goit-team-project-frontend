import {useSearchParams} from 'react-router-dom';
import {token} from '../../redux/auth/token';
import {useDispatch} from 'react-redux';
import {refresh} from '../../redux/auth/auth-operations';

export const Auth = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const tokenValue = searchParams.get('token');
    console.log(searchParams.get('token'));
    const dispatch = useDispatch();
    dispatch(refresh(token));
    return <></>;
};
