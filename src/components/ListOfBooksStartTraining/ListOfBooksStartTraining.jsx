import {
    ListOfBook,
    ListOfLabels,
    TableOfBooks,
} from '../ListOfBooks/ListOfBooks.styled';
import { TrItemLabel } from './ListOfBooksStartTraining.styled';
import { BookStartTraining } from './BookStartTraining';

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

export function ListOfBooksStartTraining() {
    return (
        <TableOfBooks>
            <ListOfLabels>
                <TrItemLabel>Назва книги</TrItemLabel>
                <TrItemLabel>Автор</TrItemLabel>
                <TrItemLabel>Рік</TrItemLabel>
                <TrItemLabel>Стор.</TrItemLabel>
            </ListOfLabels>
            <ListOfBook>
                {books.map(book => {
                    return (
                        <BookStartTraining
                            key={book.id}
                            data={book}
                        ></BookStartTraining>
                    );
                })}
            </ListOfBook>
        </TableOfBooks>
    );
}
