import {Container} from '../../baseStyles';
import {EmptyWrapper, Section} from './Library.styled';
import EmptyLibrary from '../../components/EmptyLibrary';
import {Outlet} from 'react-router-dom';

const Library = () => {
    const isLibraryEmpty = false;

    return (
        <Section>
            <Container>
                {isLibraryEmpty ? (
                    <EmptyWrapper>
                        <EmptyLibrary />
                    </EmptyWrapper>
                ) : (
                    <Outlet />
                )}
            </Container>
        </Section>
    );
};

export default Library;
