import {colors} from '../../baseStyles';
import OtherCategories from './OtherCategories';

export const InProcess = ({ length }) => {
    const books = [
        {
            id: '4',
            title: 'Scrum. Революционный метод управлениями...',
            author: 'Джефф Сазерленд',
            year: '2014',
            totalPages: '25',
        },
        {
            id: '5',
            title: 'Deadline. Роман об управлении проектами.',
            author: 'Том ДеМарко ',
            year: '2006',
            totalPages: '188',
        },
        {
            id: '6',
            title: '5 Пороков команды. Притчи о лидерстве.',
            author: 'Патрик Ленсиони ',
            year: '2011',
            totalPages: '125',
        },
        {
            id: '7',
            title: '5 Пороков команды. Притчи о лидерстве. 2',
            author: 'Патрик Ленсиони ',
            year: '2011',
            totalPages: '125',
        },
        {
            id: '8',
            title: '5 Пороков команды. Притчи о лидерстве. 3',
            author: 'Патрик Ленсиони ',
            year: '2011',
            totalPages: '125',
        },
    ];

    const visibleBooks = length === 'short' ? books.slice(0, 3) : books;

    return (
        <OtherCategories
            type="inProcess"
            books={visibleBooks}
            color={`${colors.accentText}`}
        />
    );
};
