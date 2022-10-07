import {
    EmptyCategoryMessage,
    ListOther,
    Title,
    TitleAuthor,
    TitleName,
    TitlePage,
    TitleYear,
    WrapperTitles,
} from '../LibraryCategories.styled';

import OtherCategoriesTabletItem from '../OtherCategories/OtherCategoriesTabletItem';

let tablet = window.matchMedia('(min-width: 768px)').matches;

const OtherCategoriesTablet = ({ type, color, books }) => {
    return (
        <>
            <Title>
                {type === 'inProcess' ? 'Читаю' : 'Маю намір прочитати'}
            </Title>

            {!!books?.length ? (
                <>
                    <WrapperTitles>
                        <TitleName>Назва книги</TitleName>
                        <TitleAuthor>Автор</TitleAuthor>
                        <TitleYear>Рік</TitleYear>
                        <TitlePage>Стор.</TitlePage>
                    </WrapperTitles>
                    <ListOther>
                        {books &&
                            books.map(book => (
                                <OtherCategoriesTabletItem
                                    key={book._id}
                                    color={color}
                                    book={book}
                                />
                            ))}
                    </ListOther>
                </>
            ) : (
                <EmptyCategoryMessage>
                    Тут поки що немає книг
                </EmptyCategoryMessage>
            )}
        </>
    );
};

export default OtherCategoriesTablet;
