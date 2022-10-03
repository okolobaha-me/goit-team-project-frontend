import { Wrapper } from './LibraryCategories.styled';
import { colors } from '../../baseStyles/utils/variables';
import Read from './Read';
import OtherCategories from './OtherCategories';

const books = [
    {
        id: '1',
        title: 'Психбольница в руках пациентов...',
        author: 'Купер Алан',
        year: '2009',
        totalPages: '183',
        rating: 'rating',
    },
];

const processReading = [
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
];

const goingToRead = [
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
];

const LibraryCategories = () => {
    return (
        <Wrapper>
            <>
                <Read books={books} color={`${colors.darkGrayText}`} />
            </>

            <>
                <OtherCategories
                    books={processReading}
                    type="inProcess"
                    color={`${colors.accentBg}`}
                />
            </>

            <>
                <OtherCategories
                    type="readIntention"
                    books={goingToRead}
                    color={`${colors.darkGrayText}`}
                />
            </>
        </Wrapper>
    );
};

export default LibraryCategories;
