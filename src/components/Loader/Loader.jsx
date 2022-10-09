import {colors} from '../../baseStyles';
import {PacmanLoader} from 'react-spinners';
import {LoaderWrapper} from './Loader.styled';

export const Loader = () => {
    return (
        <LoaderWrapper>
            <PacmanLoader
                color={colors.accentText}
                loading={true}
                size={60}
                aria-label="Loading Spinner"
            />
           </LoaderWrapper>
    );
};
