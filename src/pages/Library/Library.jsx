import {Container} from '../../baseStyles';
import {EmptyWrapper, Section} from './Library.styled';
import EmptyLibrary from '../../components/EmptyLibrary';
import FormLibrary from '../../components/FormLibrary';
import LibraryCategories from '../../components/LibraryCategories';

const Library = () => {
    const isLibraryEmpty = false;
    let isMobile = window.matchMedia('(max-width: 767px)').matches;

    return (
        <Section>
            <Container>
                {!isMobile && <FormLibrary />}
                {isLibraryEmpty ? (
                    <EmptyWrapper>
                        <EmptyLibrary />
                    </EmptyWrapper>
                ) : (
                    <LibraryCategories />
                )}
            </Container>
        </Section>
    );
};

export default Library;
