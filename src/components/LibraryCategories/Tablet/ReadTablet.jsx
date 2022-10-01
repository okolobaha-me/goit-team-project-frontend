import {
    Wrapper,
    NameBook,
    Author,
    Year,
    Page,
    Rating,
    List,
    Icon,
    Item,
    Book,
    Writer,
    Date,
    NumberPages,
    Stars,
    Button,
} from './AllCategoriesTablet.styled';
import icons from '../../../images/svg/icons.svg';

const ReadTablet = ({ color }) => {
    return (
        <>
            <Wrapper>
                <NameBook>Назва книги</NameBook>
                <Author>Автор</Author>
                <Year>Рік</Year>
                <Page>Стор.</Page>
                <Rating>Рейтинг</Rating>
            </Wrapper>
            <List>
                <Item>
                    <Icon color={color} width="22" height="17">
                        <use href={`${icons}#icon-book-no-color`} />
                    </Icon>
                    <Book>Психбольница в руках пациентов...</Book>

                    <Writer>Купер Алан</Writer>
                    <Date>2009</Date>
                    <NumberPages>183</NumberPages>
                    <Stars>
                        <svg width="24" height="12">
                            <use href={`${icons}#icon-greyStar`} />
                        </svg>
                    </Stars>
                    <Button type="button" variant={'gray'}>
                        Резюме
                    </Button>
                </Item>
            </List>
        </>
    );
};

export default ReadTablet;
