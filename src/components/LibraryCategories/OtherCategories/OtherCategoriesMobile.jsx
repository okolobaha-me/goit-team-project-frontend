import {List, Title, EmptyCategoryMessage} from '../LibraryCategories.styled';
import OtherCategoriesMobileItem from '../OtherCategories/OtherCategoriesMobileItem';

const OtherCategoriesMobile = ({ color, type, books }) => {
    return (
        <>
            <Title>
                {type === 'inProcess' ? 'Читаю' : 'Маю намір прочитати'}
            </Title>
            {!!books?.length ? (
                <List>
                    {books &&
                        books.map(book => (
                            <OtherCategoriesMobileItem
                                key={book._id}
                                color={color}
                                book={book}
                            />
                        ))}
                </List>
            ) : (<EmptyCategoryMessage>
                    Тут поки що немає книг
            </EmptyCategoryMessage>
            )}
        </>
    );
};

export default OtherCategoriesMobile;
