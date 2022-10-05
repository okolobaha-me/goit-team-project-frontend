import {ArrowMore, ButtonMore, IconMore, LinkMore, LinkMoreWrapper, Wrapper,} from './LibraryCategories.styled';
import Read from './Read';
import {Plan} from './Plan';
import {InProcess} from './InProcess';
import FormLibrary from '../FormLibrary';
import icons from '../../images/svg/icons.svg';

const LibraryCategories = () => {
    let isMobile = window.matchMedia('(max-width: 767px)').matches;

    return (
        <>
            {!isMobile && <FormLibrary />}

            <Wrapper>
                <Read length={'short'} />
                <LinkMoreWrapper>
                    <LinkMore to={'read'}>
                        Усі книги
                        <ArrowMore width="24" height="12">
                            <use href={`${icons}#icon-arrowMore`} />
                        </ArrowMore>
                    </LinkMore>
                </LinkMoreWrapper>

                <InProcess length={'short'} />
                <LinkMoreWrapper>
                    <LinkMore to={'in-process'}>
                        Усі книги
                        <ArrowMore width="24" height="12">
                            <use href={`${icons}#icon-arrowMore`} />
                        </ArrowMore>
                    </LinkMore>
                </LinkMoreWrapper>

                <Plan length={'short'} />
                <LinkMoreWrapper>
                    <LinkMore to={'plan'}>
                        Усі книги
                        <ArrowMore width="24" height="12">
                            <use href={`${icons}#icon-arrowMore`} />
                        </ArrowMore>
                    </LinkMore>
                </LinkMoreWrapper>
            </Wrapper>

            {isMobile && (
                <ButtonMore to={'add-book'} relative="library">
                    <IconMore width="52" height="52">
                        <use href={`${icons}#icon-more`}></use>
                    </IconMore>
                </ButtonMore>
            )}
        </>
    );
};

export default LibraryCategories;
