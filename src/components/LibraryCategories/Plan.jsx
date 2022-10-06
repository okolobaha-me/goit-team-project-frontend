import {colors} from '../../baseStyles';
import OtherCategories from './OtherCategories';
import {useGetPlanBooksQuery} from '../../redux/books/booksSlice';
import {MiniLoader} from '../Loader/MiniLoader';

export const Plan = ({ length }) => {
    const { data: books = [], status } = useGetPlanBooksQuery();

    if (status === 'pending') return <MiniLoader />;

    const visibleBooks =
        length === 'short'
            ? books.data?.result.slice(books.data?.result.length - 3)
            : books.data?.result;

    return (
        <OtherCategories
            books={visibleBooks}
            type="readIntention"
            color={`${colors.lightGrayText}`}
        />
    );
};
