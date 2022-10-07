import ReadMobile from './ReadMobile';
import ReadTablet from './ReadTablet';
import { colors } from '../../../baseStyles';
import { useState } from 'react';
import { RatingModal } from '../../Modals';
import { EmptyCategoryMessage } from '../LibraryCategories.styled';
import { MiniLoader } from '../../Loader/MiniLoader';
import { useGetDoneBooksQuery } from '../../../redux/books/booksSlice';
import { useVisibleBooks } from '../../../hooks/useVisibleBooks';

let mobile = window.matchMedia('(max-width: 767px)').matches;

const Read = ({ length }) => {
    const [resumeBookId, setResumeBookId] = useState(null);
    const { data: books = [], isLoading } = useGetDoneBooksQuery();

    const doneBooks = books?.data?.result;

    const visibleBooks = useVisibleBooks(books?.data?.result, length);

    if (isLoading) return <MiniLoader />;

    if (!visibleBooks.length)
        return (
            <EmptyCategoryMessage>Тут поки що немає книг</EmptyCategoryMessage>
        );

    const closeModal = () => {
        setResumeBookId(null);
    };

    // const addBook = id => {
    //     if (selectedBooks.find(b => b._id === id)) {
    //         console.log("you can't add the same book again");
    //         return;
    //     }

    //     setSelectedBooks(prev => [
    //         ...prev,
    //         books.data?.result.find(book => book._id === id),
    //     ]);
    // };

    const openModal = bookId => {
        doneBooks.find(book => book._id === bookId);
        setResumeBookId(bookId);
    };

    return (
        <>
            {mobile ? (
                <ReadMobile
                    color={`${colors.darkGrayText}`}
                    books={visibleBooks}
                    openModal={openModal}
                />
            ) : (
                <ReadTablet
                    color={`${colors.darkGrayText}`}
                    books={visibleBooks}
                    openModal={openModal}
                />
            )}

            {resumeBookId && (
                <RatingModal closeModal={closeModal} bookId={resumeBookId} />
            )}
        </>
    );
};

export default Read;
