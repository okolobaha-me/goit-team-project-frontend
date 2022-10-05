import {colors} from '../../baseStyles';
import OtherCategories from './OtherCategories';

export const Plan = ({ length }) => {
    const books = [
        {
            id: '2',
            title: 'Разработка ценностных предложений.',
            author: 'Алекс Остервальдер, Ив Пинье',
            year: '2013',
            totalPages: '368',
        },
        {
            id: '3',
            title: 'Управление продуктом в Scrum. Agile-методы для вашего бизнеса.',
            author: 'Роман Пихлер ',
            year: '2010',
            totalPages: '92',
        },
        {
            id: '4',
            title: 'Управление продуктом в Scrum. Agile-методы для вашего бизнеса. 2',
            author: 'Роман Пихлер ',
            year: '2010',
            totalPages: '92',
        },
        {
            id: '5',
            title: 'Управление продуктом в Scrum. Agile-методы для вашего бизнеса. 3',
            author: 'Роман Пихлер ',
            year: '2010',
            totalPages: '92',
        },
    ];

    const visibleBooks = length === 'short' ? books.slice(0, 3) : books;

    return (
        <OtherCategories
            books={visibleBooks}
            type="readIntention"
            color={`${colors.lightGrayText}`}
        />
    );
};
