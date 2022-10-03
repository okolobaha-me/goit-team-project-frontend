import icons from '../../../images/svg/icons.svg';

import {
    IconBook,
    BookHeader,
    BookAuthor,
    BookYear,
    BookPage,
    ItemOtherBook,
} from '../LibraryCategories.styled';

const OtherCategoriesTabletItem = ({ color, book }) => {
    const { title, author, year, totalPages } = book;

    return (
        <ItemOtherBook>
            <IconBook color={color} width="22" height="17">
                <use href={`${icons}#icon-book-no-color`} />
            </IconBook>
            <BookHeader>{title}</BookHeader>

            <BookAuthor>{author}</BookAuthor>
            <BookYear>{year}</BookYear>
            <BookPage>{totalPages}</BookPage>
        </ItemOtherBook>
    );
};
export default OtherCategoriesTabletItem;
