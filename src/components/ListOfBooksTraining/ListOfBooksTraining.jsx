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
        checked: true,
    },
    {
        id: '456',
        name: 'Deadline. Роман об управлении проектами.',
        year: 2006,
        amountOfPages: 188,
        author: 'Том ДеМарко',
        checked: true,
    },
    {
        id: '789',
        name: '5 Пороков команды.Притчи о лидерстве.',
        year: 2011,
        amountOfPages: 125,
        author: 'Патрик Ленсиони',
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
