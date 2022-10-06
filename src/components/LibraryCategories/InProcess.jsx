import {colors} from '../../baseStyles';
import OtherCategories from './OtherCategories';
import {useGetReadBooksQuery} from '../../redux/books/booksSlice';
import {MiniLoader} from '../Loader/MiniLoader';

export const InProcess = ({ length }) => {
    const { data: books = [], status } = useGetReadBooksQuery();

    if (status === 'pending') return <MiniLoader />;

    const visibleBooks = length === 'short' ? books.slice(0, 3) : books;

    return (
        <OtherCategories
            type="inProcess"
            books={visibleBooks}
            color={`${colors.accentText}`}
        />
    );
};
