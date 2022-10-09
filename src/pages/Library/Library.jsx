import {Container} from '../../baseStyles';
import {Section} from './Library.styled';
import {Outlet} from 'react-router-dom';

const Library = () => {
    return (
        <Section>
            <Container>
                <Outlet />
            </Container>
        </Section>
    );
};

export default Library;
