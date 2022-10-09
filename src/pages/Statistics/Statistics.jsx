import {Container} from '../../baseStyles';
import Timer from '../../components/Timer';
import Goals from '../../components/Goals';
import {ListOfBooksTraining} from '../../components/ListOfBooksTraining';
import {Results} from '../../components/Results';
import {TrainingForm} from '../../components/TrainingForm';
import {
    BottomWrapper,
    FormWrapper,
    GoalsWrapper,
    GraphWrapper,
    InnerWrapper,
    ListWrapper,
    Section,
    TimerWrapper,
    Title,
    TopWrapper,
} from './Statistics.styled';

import {useGetPlanningQuery} from '../../redux/books/booksSlice';
import {Graph} from '../../components/Graph/Graph';
import {Navigate} from 'react-router-dom';

const fillGraphData = obj => {
    const lastDay = Object.keys(obj)[Object.keys(obj).length - 1];
    const pagesPerDay = 100;
    const duration = 8;

    const arr = [];

    for (let i = 0; i < lastDay; i++) {
        const day = { uv: 0, pv: pagesPerDay };
        arr.push(day);
    }

    const daysLeft = duration - Number(lastDay);

    let left = [];

    if (daysLeft > 0) {
        for (let i = 0; i < daysLeft; i++) {
            const day = { pv: pagesPerDay };
            left.push(day);
        }
    }

    const graphData = [...arr, ...left];

    for (const day in obj) {
        graphData[Number(day) - 1].uv = obj[day];
    }

    return graphData;
};

const Statistics = () => {
    const isTablet = window.screen.width > 767 && window.screen.width <= 1279;

    const { data: result } = useGetPlanningQuery();

    if (!result) return <Navigate to="../training" />;

    const booksNumber = result.data.booksNumber;
    const planningDuration = result.data.planningDur;
    const booksLeft = result.planning.booksToRead.length;
    const planing = result.planning;
    const books = result.data.books;
    const { endDate } = planing;

    return (
        <Container>
            <Section>
                <TopWrapper>
                    <GoalsWrapper>
                        <Goals
                            amountBooks={booksNumber}
                            amountDays={planningDuration}
                            booksLeft={booksLeft}
                        />
                    </GoalsWrapper>
                    <InnerWrapper>
                        <TimerWrapper>
                            <Timer endDate={endDate} />
                        </TimerWrapper>
                        <FormWrapper>
                            {isTablet && (
                                <>
                                    <Title>Моє тренування</Title>
                                    <TrainingForm />
                                </>
                            )}
                        </FormWrapper>
                        <ListWrapper>
                            <ListOfBooksTraining books={books} />
                        </ListWrapper>
                    </InnerWrapper>
                </TopWrapper>
                <BottomWrapper>
                    <GraphWrapper>
                        <Graph />
                    </GraphWrapper>
                    <Results />
                </BottomWrapper>
            </Section>
        </Container>
    );
};

export default Statistics;
