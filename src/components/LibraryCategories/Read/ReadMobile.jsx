import { List, Title } from '../LibraryCategories.styled';
import ReadMobileItem from '../Read/ReadMobileItem';

let mobile = window.matchMedia('(max-width: 767px)').matches;

const ReadMobile = ({ color, books }) => {
    return (
        <>
            {mobile && (
                <>
                    <Title>Прочитано</Title>
                    <List>
                        {books &&
                            books.map(book => (
                                <ReadMobileItem
                                    key={book.id}
                                    color={color}
                                    book={book}
                                />
                            ))}
                    </List>
                </>
            )}
        </>
    );
};

export default ReadMobile;
