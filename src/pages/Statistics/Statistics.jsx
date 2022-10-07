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

const Statistics = () => {
    const isTablet = window.screen.width > 767 && window.screen.width <= 1279;

    const { data: books } = useGetPlanningQuery();

    const booksNumber = books?.data.booksNumber;
    const planningDuration = books?.data.planningDur;

    const result = books?.planning;

    const booksLeft = result?.booksToRead.length;

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
                            <Timer />
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
