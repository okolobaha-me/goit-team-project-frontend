import icons from '../../images/svg/icons.svg';
import {
    BtnDelete,
    Desc,
    IconBook,
    IconDelete,
    Item,
    Label,
    ListOfBook,
    ListOfDesc,
    ListOfLabels,
    TableOfBooks,
    Wrapper,
} from '../ListOfBooks/ListOfBooks.styled';
import {
    TrDescItem,
    TrItemLabel,
    TrTitle,
} from './ListOfBooksStartTraining.styled';

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
                <Item>
                    <Wrapper>
                        <IconBook>
                            <use href={`${icons}#icon-book`} />
                        </IconBook>
                        <TrTitle>
                            Scrum. Революционный метод управлениями проектами.
                        </TrTitle>
                        <BtnDelete>
                            <IconDelete>
                                <use href={`${icons}#icon-delete`} />
                            </IconDelete>
                        </BtnDelete>
                    </Wrapper>
                    <ListOfDesc>
                        <TrDescItem>
                            <Label>Автор:</Label>
                            <Desc>Джефф Сазерленд</Desc>
                        </TrDescItem>
                        <TrDescItem>
                            <Label>Рік:</Label>
                            <Desc>2014</Desc>
                        </TrDescItem>
                        <TrDescItem>
                            <Label>Стор:</Label>
                            <Desc>25</Desc>
                        </TrDescItem>
                    </ListOfDesc>
                </Item>
                <Item>
                    <Wrapper>
                        <IconBook>
                            <use href={`${icons}#icon-book`} />
                        </IconBook>
                        <TrTitle>
                            5 Пороков команды. Притчи о лидерстве.{' '}
                        </TrTitle>
                        <BtnDelete>
                            <IconDelete>
                                <use href={`${icons}#icon-delete`} />
                            </IconDelete>
                        </BtnDelete>
                    </Wrapper>
                    <ListOfDesc>
                        <TrDescItem>
                            <Label>Автор:</Label>
                            <Desc>Патрик Ленсиони</Desc>
                        </TrDescItem>
                        <TrDescItem>
                            <Label>Рік:</Label>
                            <Desc>2011</Desc>
                        </TrDescItem>
                        <TrDescItem>
                            <Label>Стор:</Label>
                            <Desc>125</Desc>
                        </TrDescItem>
                    </ListOfDesc>
                </Item>
                <Item>
                    <Wrapper>
                        <IconBook>
                            <use href={`${icons}#icon-book`} />
                        </IconBook>
                        <TrTitle>
                            Deadline. Роман об управлении проектами.{' '}
                        </TrTitle>
                        <BtnDelete>
                            <IconDelete>
                                <use href={`${icons}#icon-delete`} />
                            </IconDelete>
                        </BtnDelete>
                    </Wrapper>
                    <ListOfDesc>
                        <TrDescItem>
                            <Label>Автор:</Label>
                            <Desc>Том ДеМарко</Desc>
                        </TrDescItem>
                        <TrDescItem>
                            <Label>Рік:</Label>
                            <Desc>2006</Desc>
                        </TrDescItem>
                        <TrDescItem>
                            <Label>Стор:</Label>
                            <Desc>188</Desc>
                        </TrDescItem>
                    </ListOfDesc>
                </Item>
            </ListOfBook>
        </TableOfBooks>
    );
}
