import {
    TableOfBooks,
    ListOfBook,
    ItemLabel,
    ListOfLabels,
} from '../ListOfBooks/ListOfBooks.styled';
import { BookTraining } from './BookTraining';

const books = [
    {
        id: '123',
        name: 'Scrum. Революционный метод управлениями проектами.',
        year: 2019,
        amountOfPages: 223,
        author: 'Джефф Сазерленд',
        checked: false,
    },
];

export function ListOfBooksTraining() {
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
                        <BookTraining key={book.id} data={book}></BookTraining>
                    );
                })}
            </ListOfBook>
        </TableOfBooks>
    );
}
