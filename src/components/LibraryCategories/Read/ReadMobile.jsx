import { List, Title, EmptyCategoryMessage } from '../LibraryCategories.styled';
import ReadMobileItem from '../Read/ReadMobileItem';

const ReadMobile = ({ color, books, openModal }) => {
    return (
        <>
            <Title>Прочитано</Title>
            {!!books?.length ? (
                <>
                    <List>
                        {books &&
                            books.map(book => (
                                <ReadMobileItem
                                    key={book._id}
                                    color={color}
                                    book={book}
                                    openModal={openModal}
                                />
                            ))}
                    </List>
                </>
            ) : (
                <EmptyCategoryMessage>
                    Тут поки що немає книг
                </EmptyCategoryMessage>
            )}
        </>
    );
};

export default ReadMobile;
