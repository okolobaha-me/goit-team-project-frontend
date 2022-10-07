import { Container } from '../../baseStyles';
import { EmptyWrapper, Section } from './Library.styled';
import EmptyLibrary from '../../components/EmptyLibrary';
import { Outlet } from 'react-router-dom';
import AnimatioPage from '../../components/Animations/AnimationPage';

const Library = () => {
    const isLibraryEmpty = false;

    return (
        <Section>
            <Container>
                <AnimatioPage>
                    {isLibraryEmpty ? (
                        <EmptyWrapper>
                            <EmptyLibrary />
                        </EmptyWrapper>
                    ) : (
                        <Outlet />
                    )}
                </AnimatioPage>
            </Container>
        </Section>
    );
};

export default Library;
