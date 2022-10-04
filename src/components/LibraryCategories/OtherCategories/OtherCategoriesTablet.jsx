import {
    TitleName,
    TitleAuthor,
    TitleYear,
    TitlePage,
    ListOther,
    WrapperTitles,
    Title,
} from '../LibraryCategories.styled';

import OtherCategoriesTabletItem from '../OtherCategories/OtherCategoriesTabletItem';
let tablet = window.matchMedia('(min-width: 768px)').matches;

const OtherCategoriesTablet = ({ type, color, books }) => {
    return (
        <>
            <Title>
                {type === 'inProcess' ? 'Читаю' : 'Маю намір прочитати'}
            </Title>
            {tablet && (
                <>
                    {' '}
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
                                    key={book.id}
                                    color={color}
                                    book={book}
                                />
                            ))}
                    </ListOther>
                </>
            )}
        </>
    );
};

export default OtherCategoriesTablet;
