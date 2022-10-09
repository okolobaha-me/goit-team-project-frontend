import icons from '../../images/svg/icons.svg';
import {
    BtnDelete,
    Desc,
    IconBook,
    IconDelete,
    Item,
    Label,
    ListOfDesc,
    Wrapper,
} from '../ListOfBooks/ListOfBooks.styled';
import { TrDescItem, TrTitle } from './ListOfBooksStartTraining.styled';

export function BookStartTraining({ data, deleteBook, id }) {
    const { title, year, author, totalPages } = data;

    const handleDeleteBook = () => {
        deleteBook(id);
    };

    return (
        <Item>
            <Wrapper>
                <div>
                    <IconBook>
                        <use href={`${icons}#icon-book`} />
                    </IconBook>
                </div>
                <TrTitle>{title}</TrTitle>
                <BtnDelete onClick={handleDeleteBook}>
                    <IconDelete>
                        <use href={`${icons}#icon-delete`} />
                    </IconDelete>
                </BtnDelete>
            </Wrapper>
            <ListOfDesc>
                <TrDescItem>
                    <Label>Автор:</Label>
                    <Desc> {author}</Desc>
                </TrDescItem>
                <TrDescItem>
                    <Label>Рік:</Label>
                    <Desc>{year}</Desc>
                </TrDescItem>
                <TrDescItem>
                    <Label>Стор:</Label>
                    <Desc>{totalPages}</Desc>
                </TrDescItem>
            </ListOfDesc>
        </Item>
    );
}
