import icons from '../../../images/svg/icons.svg';
import {
    Button,
    Item,
    Text,
    WrapperItem,
    TextSelection,
    Icon,
    StyledRating,
} from '../LibraryCategories.styled';

const ReadMobileItem = ({ book, color }) => {
    const { title, author, year, totalPages, rating } = book;
    return (
        <Item>
            <Icon color={color} width="22" height="18.1">
                <use href={`${icons}#icon-book-no-color`} />
            </Icon>
            <WrapperItem>
                <Text> {title} </Text>
                <Text>
                    <TextSelection>Автор:</TextSelection> {author}
                </Text>
                <Text>
                    <TextSelection>Рік:</TextSelection> {year}
                </Text>
                <Text>
                    <TextSelection>Стор.:</TextSelection> {totalPages}
                </Text>
                <Text>
                    <TextSelection>Рейтинг:</TextSelection> <StyledRating name="no-value" value={rating} readOnly size="small" />
                </Text>
                <Button type="button" variant={'gray'}>
                    Резюме
                </Button>
            </WrapperItem>
        </Item>
    );
};
export default ReadMobileItem;
