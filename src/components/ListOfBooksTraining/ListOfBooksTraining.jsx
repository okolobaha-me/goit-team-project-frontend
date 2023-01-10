import {ItemLabel, ListOfBook, ListOfLabels, TableOfBooks,} from '../ListOfBooks/ListOfBooks.styled';

import {BookTraining} from './BookTraining';

export function ListOfBooksTraining({ books }) {
    return (
        <TableOfBooks>
            <ListOfLabels>
                <ItemLabel>Назва книги</ItemLabel>
                <ItemLabel>Автор</ItemLabel>
                <ItemLabel>Рік</ItemLabel>
                <ItemLabel>Стор.</ItemLabel>
            </ListOfLabels>
            <ListOfBook>
                {books.map(book => {
                    return (
                        <BookTraining key={book._id} data={book}></BookTraining>
                    );
                })}
            </ListOfBook>
        </TableOfBooks>
    );
}
