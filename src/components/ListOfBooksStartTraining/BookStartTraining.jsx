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

export function BookStartTraining({
    data: { name, year, amountOfPages, author },
}) {
    return (
        <Item>
            <Wrapper>
                <div>
                    <IconBook>
                        <use href={`${icons}#icon-book`} />
                    </IconBook>
                </div>
                <TrTitle>{name}</TrTitle>
                <BtnDelete>
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
                    <Desc>{amountOfPages}</Desc>
                </TrDescItem>
            </ListOfDesc>
        </Item>
    );
}
