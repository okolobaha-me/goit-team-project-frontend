import {
    IconBook,
    ItemBook,
    Book,
    Writer,
    Date,
    NumberPages,
    Stars,
    ButtonRating,
    StyledRating,
} from '../LibraryCategories.styled';

import icons from '../../../images/svg/icons.svg';

const ReadTabletItem = ({ color, book }) => {
    const { title, author, year, totalPages, rating } = book;
    return (
        <>
            <ItemBook>
                <IconBook color={color} width="22" height="17">
                    <use href={`${icons}#icon-book-no-color`} />
                </IconBook>
                <Book>{title}</Book>

                <Writer>{author}</Writer>
                <Date>{year}</Date>
                <NumberPages>{totalPages}</NumberPages>
                <Stars><StyledRating name="no-value" value={rating} readOnly  /></Stars>
                <ButtonRating type="button" variant={'gray'}>
                    Резюме
                </ButtonRating>
            </ItemBook>
        </>
    );
};

export default ReadTabletItem;
