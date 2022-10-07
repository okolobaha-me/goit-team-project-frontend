import {colors} from '../../baseStyles';
import OtherCategories from './OtherCategories';
import {useGetReadBooksQuery} from '../../redux/books/booksSlice';
import {MiniLoader} from '../Loader/MiniLoader';
import {useVisibleBooks} from '../../hooks/useVisibleBooks';

export const InProcess = ({ length }) => {
    const { data: books = [], isLoading } = useGetReadBooksQuery();

    const visibleBooks = useVisibleBooks(books.data?.result, length);

    if (isLoading === 'pending') return <MiniLoader />;

    return (
        <OtherCategories
            type="inProcess"
            books={visibleBooks}
            color={`${colors.accentText}`}
        />
    );
};
