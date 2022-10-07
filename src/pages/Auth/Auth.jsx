import {useSearchParams} from 'react-router-dom';
import {token} from '../../redux/auth/token';
import {useDispatch} from 'react-redux';
import {refresh} from '../../redux/auth/auth-operations';
import {Navigate} from "react-router-dom"
export const Auth = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const tokenValue = searchParams.get('token');
    console.log(searchParams.get('token'));
    const dispatch = useDispatch();
    token.set(tokenValue)
    dispatch(refresh(tokenValue));
    return <><Navigate to={"/library"}/></>;
};
