import {ListOfBook, ListOfLabels, TableOfBooks,} from '../ListOfBooks/ListOfBooks.styled';
import {TrItemLabel} from './ListOfBooksStartTraining.styled';
import {BookStartTraining} from './BookStartTraining';

export function ListOfBooksStartTraining({ books, deleteBook }) {
    return (
        <>
            <ListOfLabels>
                <TrItemLabel>Назва книги</TrItemLabel>
                <TrItemLabel>Автор</TrItemLabel>
                <TrItemLabel>Рік</TrItemLabel>
                <TrItemLabel>Стор.</TrItemLabel>
            </ListOfLabels>
            <TableOfBooks>
                <ListOfBook>
                    {books.map(book => {
                        return (
                            <BookStartTraining
                                key={book._id}
                                id={book._id}
                                data={book}
                                deleteBook={deleteBook}
                            ></BookStartTraining>
                        );
                    })}
                </ListOfBook>
            </TableOfBooks>
        </>
    );
}
