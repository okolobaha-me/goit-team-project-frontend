import { Container } from '../../baseStyles';
import Timer from '../../components/Timer';
import Goals from '../../components/Goals';
import { ListOfBooksTraining } from '../../components/ListOfBooksTraining';
import { Results } from '../../components/Results';
import { TrainingForm } from '../../components/TrainingForm';
import {
    BottomWrapper,
    FormWrapper,
    GoalsWrapper,
    InnerWrapper,
    ListWrapper,
    Section,
    TimerWrapper,
    Title,
    TopWrapper,
} from './Statistics.styled';

import { useGetPlanningQuery } from '../../redux/books/booksSlice';

import { Graph } from '../../components/Graph/Graph';
import { Loader } from '../../components/Loader/Loader';

const Statistics = () => {
    const isTablet = window.screen.width > 767 && window.screen.width <= 1279;

    const { data } = useGetPlanningQuery();

    if (!data) return <Loader />;

    const booksNumber = data.data.booksNumber;
    const planningDuration = data.data.planningDur;
    const booksLeft = data.planning.booksToRead.length;

    const planing = data.planning;

    console.log(planing);

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
                            <ListOfBooksTraining />
                        </ListWrapper>
                    </InnerWrapper>
                </TopWrapper>
                <BottomWrapper>
                    <Graph />
                    <Results />
                </BottomWrapper>
            </Section>
        </Container>
    );
};

export default Statistics;
