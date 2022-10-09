import {TrainingForm} from '../../../components/TrainingForm';
import {
    BottomWrapper,
    Button,
    FormListWrapper,
    FormWrapper,
    GoalsWrapper,
    HeadWrapper,
    ListWrapper,
    Title,
} from '../Training.styled';
import Goals from '../../../components/Goals';
import {ListOfBooksStartTraining} from '../../../components/ListOfBooksStartTraining';
import {ButtonMore, IconMore,} from '../../../components/LibraryCategories/LibraryCategories.styled';
import icons from '../../../images/svg/icons.svg';
import {Graph} from '../../../components/Graph/Graph';
import {useState} from 'react';
import {useAddPlaningMutation, useGetPlanBooksQuery, useGetPlanningQuery,} from '../../../redux/books/booksSlice';
import {differenceInCalendarDays, format} from 'date-fns';
import Statistics from '../../Statistics/Statistics';
import {Loader} from '../../../components/Loader/Loader';

export const Training = () => {
    let isMobile = window.matchMedia('(max-width: 767px)').matches;
    const [selectedBooks, setSelectedBooks] = useState([]);
    const [startValue, setStartValue] = useState(null);
    const [endValue, setEndValue] = useState(null);
    const [pagesQuantity, setPagesQuantity] = useState(0);

    const deleteBook = id => {
        setSelectedBooks(prev => prev.filter(book => book._id !== id));
    };

    const { data: books = [] } = useGetPlanBooksQuery();

    const addBook = id => {
        if (selectedBooks.find(b => b._id === id)) {
            console.log("you can't add the same book again");
            return;
        }

        setSelectedBooks(prev => [
            ...prev,
            books.data?.result.find(book => book._id === id),
        ]);

        const pages = books.data?.result.find(
            book => book._id === id
        ).totalPages;

        setPagesQuantity(prev => prev + pages);
    };

    const [addPlaning] = useAddPlaningMutation();

    const startNewPlaning = () => {
        const books = selectedBooks.reduce(
            (acc, book) => [...acc, book._id],
            []
        );

        if (!startValue || !endValue) {
            console.log('choose dates');
            return;
        }

        if (books.length === 0) {
            console.log('add at least one book');
        }

        const startDate = format(startValue._d, 'yyyy-MM-dd');
        const endDate = format(endValue._d, 'yyyy-MM-dd');

        const newPlaning = { startDate, endDate, books };

        addPlaning(newPlaning);
    };

    const getTrainingDuration = () => {
        if (!startValue || !endValue) return 0;
        return differenceInCalendarDays(endValue._d, startValue._d);
    };

    const { data, isLoading } = useGetPlanningQuery();
    if (isLoading) return <Loader />;
    if (data) return <Statistics result={data} />;

    const getAveragePages = () => {
        if (!getTrainingDuration()) return 0;

        return Math.ceil(pagesQuantity / getTrainingDuration());
    };

    const graphData = Array(getTrainingDuration()).fill({
        pv: getAveragePages(),
    });

    return (
        <>
            <HeadWrapper>
                <GoalsWrapper>
                    <Goals
                        amountBooks={selectedBooks.length}
                        amountDays={getTrainingDuration()}
                    />
                </GoalsWrapper>

                <FormListWrapper>
                    <FormWrapper>
                        {!isMobile && (
                            <>
                                <Title>Моє тренування</Title>
                                <TrainingForm
                                    addBook={addBook}
                                    startValue={startValue}
                                    setStartValue={setStartValue}
                                    endValue={endValue}
                                    setEndValue={setEndValue}
                                />
                            </>
                        )}
                    </FormWrapper>

                    <ListWrapper>
                        <ListOfBooksStartTraining
                            books={selectedBooks}
                            deleteBook={deleteBook}
                        />
                    </ListWrapper>
                </FormListWrapper>
            </HeadWrapper>

            <BottomWrapper>
                <Button variant={'accent'} onClick={startNewPlaning}>
                    Почати тренування
                </Button>

                <Graph averagePages={getAveragePages()} data={graphData} />
            </BottomWrapper>

            {isMobile && (
                <ButtonMore to={'start-new'} relative="library">
                    <IconMore width="52" height="52">
                        <use href={`${icons}#icon-more`}></use>
                    </IconMore>
                </ButtonMore>
            )}
        </>
    );
};
