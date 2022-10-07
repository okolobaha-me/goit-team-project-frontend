import {ArrowMore, ButtonMore, IconMore, LinkMore, LinkMoreWrapper, Wrapper,} from './LibraryCategories.styled';
import Read from './Read';
import {Plan} from './Plan';
import {InProcess} from './InProcess';
import FormLibrary from '../FormLibrary';
import icons from '../../images/svg/icons.svg';
import {useGetDoneBooksQuery, useGetPlanBooksQuery, useGetReadBooksQuery,} from '../../redux/books/booksSlice';

const LibraryCategories = () => {
    let isMobile = window.matchMedia('(max-width: 767px)').matches;
    const { data: booksInProcess = [] } = useGetReadBooksQuery();
    const { data: booksPlan = [] } = useGetPlanBooksQuery();
    const { data: booksDone = [] } = useGetDoneBooksQuery();
    const isInProcessBooks = !!booksInProcess.data?.result.length;
    const isPlanBooks = !!booksPlan.data?.result.length;
    const isDoneBooks = !!booksDone.data?.result.length;

    return (
        <>
            {!isMobile && <FormLibrary />}

            <Wrapper>
                <Read length={'short'} />
                {isDoneBooks && (
                    <LinkMoreWrapper>
                        <LinkMore to={'read'}>
                            Усі книги
                            <ArrowMore width="24" height="12">
                                <use href={`${icons}#icon-arrowMore`} />
                            </ArrowMore>
                        </LinkMore>
                    </LinkMoreWrapper>
                )}

                <InProcess length={'short'} />
                {isInProcessBooks && (
                    <LinkMoreWrapper>
                        <LinkMore to={'in-process'}>
                            Усі книги
                            <ArrowMore width="24" height="12">
                                <use href={`${icons}#icon-arrowMore`} />
                            </ArrowMore>
                        </LinkMore>
                    </LinkMoreWrapper>
                )}

                <Plan length={'short'} />
                {isPlanBooks && (
                    <LinkMoreWrapper>
                        <LinkMore to={'plan'}>
                            Усі книги
                            <ArrowMore width="24" height="12">
                                <use href={`${icons}#icon-arrowMore`} />
                            </ArrowMore>
                        </LinkMore>
                    </LinkMoreWrapper>
                )}
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
