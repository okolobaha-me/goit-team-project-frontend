import {
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
} from './ListOfBooks.styled';
import { HiCheck } from 'react-icons/hi';
// import { Checkbox } from '@mui/material';

// GrCheckboxSelected;

import icons from '../../images/svg/icons.svg';
import Checkbox from 'react-custom-checkbox';

export function ListOfBooks() {
    return (
        <>
            <ListOfLabels>
                <ItemLabel>Назва книги</ItemLabel>
                <ItemLabel>Автор</ItemLabel>
                <ItemLabel>Рік</ItemLabel>
                <ItemLabel>Стор.</ItemLabel>
            </ListOfLabels>
            <ListOfBook>
                <Item>
                    <Wrapper>
                        <Checkbox
                            icon={
                                <div
                                    style={{
                                        width: 13,
                                        height: 13,
                                        border: '1px solid #FF6B08',
                                        borderRadius: '2px',
                                    }}
                                >
                                    <HiCheck color="#FF6B08" size={14} />
                                </div>
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
                            style={{ cursor: 'pointer', marginRight: 19 }}
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
                        <Checkbox
                            icon={
                                <div
                                    style={{
                                        width: 13,
                                        height: 13,
                                        border: '1px solid #FF6B08',
                                        borderRadius: '2px',
                                    }}
                                >
                                    <HiCheck color="#FF6B08" size={14} />
                                </div>
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
                            style={{ cursor: 'pointer', marginRight: 19 }}
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
                        <Checkbox
                            icon={
                                <div
                                    style={{
                                        width: 13,
                                        height: 13,
                                        border: '1px solid #FF6B08',
                                        borderRadius: '2px',
                                    }}
                                >
                                    <HiCheck color="#FF6B08" size={14} />
                                </div>
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
                            style={{ cursor: 'pointer', marginRight: 19 }}
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
        </>
    );
}
