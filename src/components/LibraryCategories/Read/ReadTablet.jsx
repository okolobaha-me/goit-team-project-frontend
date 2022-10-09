import {Author, ListOther, NameBook, Page, RatingTitle, Title, WrapperTitles, Year, EmptyCategoryMessage} from '../LibraryCategories.styled';
import ReadTabletItem from '../Read/ReadTabletItem';

const ReadTablet = ({ color, books, openModal }) => {
    return (
        <>
            <Title>Прочитано</Title>
            {!!books?.length ? (
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
                </>) : (
                <EmptyCategoryMessage>
                    Тут поки що немає книг
                </EmptyCategoryMessage>
            )}
        </>
    );
};

export default ReadTablet;
