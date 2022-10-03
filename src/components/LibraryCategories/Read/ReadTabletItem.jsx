import {
    IconBook,
    ItemBook,
    Book,
    Writer,
    Date,
    NumberPages,
    Stars,
    Button2,
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
                <Stars>{rating}</Stars>
                <Button2 type="button" variant={'gray'}>
                    Резюме
                </Button2>
            </ItemBook>
        </>
    );
};

export default ReadTabletItem;
