import {
    TableOfBooks,
    ListOfBook,
    Item,
    Title,
    ListOfDesc,
    DescItem,
    Label,
    Desc,
    Wrapper,
    ItemLabel,
    ListOfLabels,
    IconCheckbox,
} from '../ListOfBooks/ListOfBooks.styled';
import icons from '../../images/svg/icons.svg';

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
                <Item>
                    <Wrapper>
                        <div>
                            <IconCheckbox>
                                <use href={`${icons}#icon-checkbox-color`} />
                            </IconCheckbox>
                        </div>
                        <Title>
                            Scrum. Революционный метод управлениями проектами.
                        </Title>
                    </Wrapper>
                    <ListOfDesc>
                        <DescItem>
                            <Label>Автор:</Label>
                            <Desc>Джефф Сазерленд</Desc>
                        </DescItem>
                        <DescItem>
                            <Label>Рік:</Label>
                            <Desc>2014</Desc>
                        </DescItem>
                        <DescItem>
                            <Label>Стор:</Label>
                            <Desc>25</Desc>
                        </DescItem>
                    </ListOfDesc>
                </Item>
                <Item>
                    <Wrapper>
                        <div>
                            <IconCheckbox>
                                <use href={`${icons}#icon-checkbox-color`} />
                            </IconCheckbox>
                        </div>
                        <Title>5 Пороков команды. Притчи о лидерстве. </Title>
                    </Wrapper>
                    <ListOfDesc>
                        <DescItem>
                            <Label>Автор:</Label>
                            <Desc>Патрик Ленсиони</Desc>
                        </DescItem>
                        <DescItem>
                            <Label>Рік:</Label>
                            <Desc>2011</Desc>
                        </DescItem>
                        <DescItem>
                            <Label>Стор:</Label>
                            <Desc>125</Desc>
                        </DescItem>
                    </ListOfDesc>
                </Item>
                <Item>
                    <Wrapper>
                        <div>
                            <IconCheckbox>
                                <use href={`${icons}#icon-checkbox`} />
                            </IconCheckbox>
                        </div>
                        <Title>Deadline. Роман об управлении проектами. </Title>
                    </Wrapper>
                    <ListOfDesc>
                        <DescItem>
                            <Label>Автор:</Label>
                            <Desc>Том ДеМарко</Desc>
                        </DescItem>
                        <DescItem>
                            <Label>Рік:</Label>
                            <Desc>2006</Desc>
                        </DescItem>
                        <DescItem>
                            <Label>Стор:</Label>
                            <Desc>188</Desc>
                        </DescItem>
                    </ListOfDesc>
                </Item>
            </ListOfBook>
        </TableOfBooks>
    );
}
