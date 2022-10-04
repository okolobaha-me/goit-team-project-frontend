import {
    WrapperTitles,
    NameBook,
    Author,
    Year,
    Page,
    RatingTitle,
    ListOther,
    Title,
} from '../LibraryCategories.styled';
import ReadTabletItem from '../Read/ReadTabletItem';
let tablet = window.matchMedia('(min-width: 768px)').matches;

const ReadTablet = ({ color, books }) => {
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
                                    key={book.id}
                                    color={color}
                                    book={book}
                                />
                            ))}
                    </ListOther>{' '}
                </>
            )}
        </>
    );
};

export default ReadTablet;
