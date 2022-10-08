import {
    TableOfBooks,
    ListOfBook,
    ItemLabel,
    ListOfLabels,
} from '../ListOfBooks/ListOfBooks.styled';

import { BookTraining } from './BookTraining';
import { useGetPlanningQuery } from '../../redux/books/booksSlice';
import { Loader } from '../Loader/Loader';

export function ListOfBooksTraining() {
    const { data: result } = useGetPlanningQuery();

    if (!result) return <Loader />;

    const books = result?.data.books;

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
