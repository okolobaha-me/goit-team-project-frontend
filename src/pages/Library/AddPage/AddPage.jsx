import FormLibrary from '../../../components/FormLibrary';
import {Navigate} from 'react-router-dom';

const AddPage = () => {
    let isMobile = window.matchMedia('(max-width: 767px)').matches;

    return (
        <>
            {!isMobile && <Navigate to={'..'} />}
            <FormLibrary />
        </>
    );
};

export default AddPage;
