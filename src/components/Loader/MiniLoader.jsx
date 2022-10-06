import {colors} from '../../baseStyles';
import {PacmanLoader} from 'react-spinners';

export const MiniLoader = () => {
    return (
        <div>
            <PacmanLoader
                color={colors.accentText}
                loading={true}
                size={30}
                aria-label="Loading Spinner"
            />
        </div>
    );
};
