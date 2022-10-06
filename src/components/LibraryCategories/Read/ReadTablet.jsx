import {Author, ListOther, NameBook, Page, RatingTitle, Title, WrapperTitles, Year,} from '../LibraryCategories.styled';
import ReadTabletItem from '../Read/ReadTabletItem';

let tablet = window.matchMedia('(min-width: 768px)').matches;

const ReadTablet = ({ color, books, openModal }) => {
    return (
        <>
            <Title>Прочитано</Title>
            {tablet && (
                <>
                    <WrapperTitles>
                        <NameBook>Назва книги</NameBook>
                        <Author>Автор</Author>
                        <Year>Рік</Year>
                        <Page>Стор.</Page>
                        <RatingTitle>Рейтинг</RatingTitle>
                    </WrapperTitles>
                    <ListOther>
                        {books &&
                            books.map(book => (
                                <ReadTabletItem
                                    key={book._id}
                                    color={color}
                                    book={book}
                                    openModal={openModal}
                                />
                            ))}
                    </ListOther>{' '}
                </>
            )}
        </>
    );
};

export default ReadTablet;
