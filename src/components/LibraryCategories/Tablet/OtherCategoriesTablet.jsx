import icons from '../../../images/svg/icons.svg';

import {
    Wrapper,
    Icon,
    TitleName,
    TitleAuthor,
    TitleYear,
    TitlePage,
    List,
    BookHeader,
    BookAuthor,
    BookYear,
    BookPage,
    Item,
} from './AllCategoriesTablet.styled';

const OtherCategoriesTablet = ({ color }) => {
    return (
        <>
            <Wrapper>
                <TitleName>Назва книги</TitleName>
                <TitleAuthor>Автор</TitleAuthor>
                <TitleYear>Рік</TitleYear>
                <TitlePage>Стор.</TitlePage>
            </Wrapper>
            <List>
                <Item>
                    <Icon color={color} width="22" height="17">
                        <use href={`${icons}#icon-book-no-color`} />
                    </Icon>
                    <BookHeader>Разработка ценностных предложений.</BookHeader>

                    <BookAuthor>Алекс Остервальдер, Ив Пинье</BookAuthor>
                    <BookYear>2013</BookYear>
                    <BookPage>368</BookPage>
                </Item>
            </List>
        </>
    );
};

export default OtherCategoriesTablet;
