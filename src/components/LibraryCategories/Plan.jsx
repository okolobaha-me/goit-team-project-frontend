import { colors } from '../../baseStyles';
import OtherCategories from './OtherCategories';
import { useGetPlanBooksQuery } from '../../redux/books/booksSlice';
import { MiniLoader } from '../Loader/MiniLoader';
import { useVisibleBooks } from '../../hooks/useVisibleBooks';

export const Plan = ({ length }) => {
    const { data: books = [], isLoading } = useGetPlanBooksQuery();

    const visibleBooks = useVisibleBooks(books.data?.result, length);
    if (isLoading) return <MiniLoader />;

    return (
        <OtherCategories
            books={visibleBooks}
            type="readIntention"
            color={`${colors.lightGrayText}`}
        />
    );
};
