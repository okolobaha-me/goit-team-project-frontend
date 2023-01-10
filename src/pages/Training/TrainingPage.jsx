import { Section } from './Training.styled';
import { Container } from '../../baseStyles';
import { Outlet } from 'react-router-dom';
import AnimationPage from '../../components/Animations/AnimationPage';
const TrainingPage = () => {
    return (
        <AnimationPage>
            <Section>
                <Container>
                    <Outlet />
                </Container>
            </Section>
        </AnimationPage>
    );
};

export default TrainingPage;
