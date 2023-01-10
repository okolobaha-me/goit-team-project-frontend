import ReadMobile from './ReadMobile';
import ReadTablet from './ReadTablet';
import { colors } from '../../../baseStyles';
import { useState } from 'react';
import { RatingModal } from '../../Modals';
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

    const closeModal = () => {
        setResumeBookId(null);
    };

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
