import icons from '../../../images/svg/icons.svg';
import {Icon, Item, Text, TextSelection, WrapperItem,} from '../LibraryCategories.styled';

const OtherCategoriesMobileItem = ({ color, book }) => {
    const { title, author, year, totalPages } = book;
    return (
        <Item>
            <Icon color={color} width="22" height="18.1">
                <use href={`${icons}#icon-book-no-color`} />
            </Icon>
            <WrapperItem>
                <Text>{title}</Text>
                <Text>
                    <TextSelection>Автор:</TextSelection>
                    {author}
                </Text>
                <Text>
                    <TextSelection>Рік:</TextSelection> {year}
                </Text>
                <Text>
                    <TextSelection>Стор.:</TextSelection>
                    {totalPages}
                </Text>
            </WrapperItem>
        </Item>
    );
};

export default OtherCategoriesMobileItem;
