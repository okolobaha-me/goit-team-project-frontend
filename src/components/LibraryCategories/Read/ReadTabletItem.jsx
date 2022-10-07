import {
    Book,
    ButtonRating,
    Date,
    IconBook,
    ItemBook,
    NumberPages,
    Stars,
    StyledRating,
    Writer,
} from '../LibraryCategories.styled';

import icons from '../../../images/svg/icons.svg';

const ReadTabletItem = ({ color, book, openModal }) => {
    const { title, author, year, totalPages, rating, _id } = book;

    const openResumeModal = () => {
        openModal(_id);
    };

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
                <Stars>
                    <StyledRating
                        name="no-value"
                        value={Number(rating)}
                        readOnly
                    />
                </Stars>
                <ButtonRating
                    type="button"
                    variant={'gray'}
                    onClick={openResumeModal}
                >
                    Резюме
                </ButtonRating>
            </ItemBook>
        </>
    );
};

export default ReadTabletItem;
