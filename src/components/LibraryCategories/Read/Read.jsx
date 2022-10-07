import ReadMobile from './ReadMobile';
import ReadTablet from './ReadTablet';
import {colors} from '../../../baseStyles';
import {useState} from 'react';
import {RatingModal} from '../../Modals';
import {EmptyCategoryMessage} from '../LibraryCategories.styled';

let mobile = window.matchMedia('(max-width: 767px)').matches;

const Read = ({ length }) => {
    const books = [
        {
            _id: '1',
            title: 'Психбольница в руках пациентов...',
            author: 'Купер Алан',
            year: '2009',
            totalPages: '183',
            rating: 3,
        },
        {
            _id: '2',
            title: 'Психбольница в руках пациентов... 2',
            author: 'Купер Алан',
            year: '2009',
            totalPages: '183',
            rating: 3,
        },
        {
            _id: '3',
            title: 'Психбольница в руках пациентов... 3',
            author: 'Купер Алан',
            year: '2009',
            totalPages: '183',
            rating: 3,
        },
        {
            _id: '4',
            title: 'Психбольница в руках пациентов... 4',
            author: 'Купер Алан',
            year: '2009',
            totalPages: '183',
            rating: 3,
        },
        {
            _id: '5',
            title: 'Психбольница в руках пациентов... 5',
            author: 'Купер Алан',
            year: '2009',
            totalPages: '183',
            rating: 3,
        },
    ];

    const visibleBooks = length === 'short' ? books.slice(0, 3) : books;

    const [resumeBookId, setResumeBookId] = useState(null);

    if (!visibleBooks.length)
        return (
            <EmptyCategoryMessage>Тут поки що немає книг</EmptyCategoryMessage>
        );

    const closeModal = () => {
        setResumeBookId(null);
    };

    const openModal = bookId => {
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
