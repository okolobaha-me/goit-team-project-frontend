import {Section} from './Training.styled';
import {Container} from '../../baseStyles';
import {Outlet} from 'react-router-dom';

const TrainingPage = () => {
    return (
        <Section>
            <Container>
                <Outlet />
            </Container>
        </Section>
    );
};

export default TrainingPage;
