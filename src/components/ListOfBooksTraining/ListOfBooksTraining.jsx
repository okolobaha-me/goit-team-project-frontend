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
    CheckboxChecked,
    IconChecked,
    CustomCheckbox,
} from '../ListOfBooks/ListOfBooks.styled';

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
                        <CustomCheckbox
                            icon={
                                <CheckboxChecked>
                                    <IconChecked />
                                </CheckboxChecked>
                            }
                            name="my-input"
                            checked={true}
                            onChange={value => {
                                console.log(value);
                            }}
                            borderColor="#A6ABB9"
                            size={13}
                            borderRadius={2}
                            borderWidth={1}
                        />
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
                        <CustomCheckbox
                            icon={
                                <CheckboxChecked>
                                    <IconChecked />
                                </CheckboxChecked>
                            }
                            name="my-input"
                            checked={true}
                            onChange={value => {
                                console.log(value);
                            }}
                            borderColor="#A6ABB9"
                            size={13}
                            borderRadius={2}
                            borderWidth={1}
                        />
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
                        <CustomCheckbox
                            icon={
                                <CheckboxChecked>
                                    <IconChecked />
                                </CheckboxChecked>
                            }
                            name="my-input"
                            checked={false}
                            onChange={value => {
                                console.log(value);
                            }}
                            borderColor="#A6ABB9"
                            size={13}
                            borderRadius={2}
                            borderWidth={1}
                        />
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
