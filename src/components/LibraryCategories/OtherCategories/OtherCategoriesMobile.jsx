import {List, Title} from '../LibraryCategories.styled';
import OtherCategoriesMobileItem from '../OtherCategories/OtherCategoriesMobileItem';

let mobile = window.matchMedia('(max-width: 767px)').matches;

const OtherCategoriesMobile = ({ color, type, books }) => {
    return (
        <>
            <Title>
                {type === 'inProcess' ? 'Читаю' : 'Маю намір прочитати'}
            </Title>
            {mobile && (
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
            )}
        </>
    );
};

export default OtherCategoriesMobile;
