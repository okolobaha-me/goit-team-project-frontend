import icons from '../../../images/svg/icons.svg';
import {
    Button,
    Icon,
    Item,
    StyledRating,
    Text,
    TextSelection,
    WrapperItem,
} from '../LibraryCategories.styled';

const ReadMobileItem = ({ book, color, openModal }) => {
    const { title, author, year, totalPages, rating, id } = book;

    const openResumeModal = () => {
        openModal(id);
    };

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
                    <TextSelection>Рейтинг:</TextSelection>{' '}
                    <StyledRating
                        name="no-value"
                        value={Number(rating)}
                        readOnly
                        size="small"
                    />
                </Text>
                <Button
                    type="button"
                    variant={'gray'}
                    onClick={openResumeModal}
                >
                    Резюме
                </Button>
            </WrapperItem>
        </Item>
    );
};
export default ReadMobileItem;
