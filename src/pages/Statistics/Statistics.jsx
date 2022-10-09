import Timer from '../../components/Timer';
import Goals from '../../components/Goals';
import { ListOfBooksTraining } from '../../components/ListOfBooksTraining';
import { Results } from '../../components/Results';
import { TrainingForm } from '../../components/TrainingForm';
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
import { Graph } from '../../components/Graph/Graph';

import AnimationPage from '../../components/Animations/AnimationPage';

import { fillGraphData } from '../../services/graphService';

const Statistics = ({ result }) => {
    const isTablet = window.screen.width > 767 && window.screen.width <= 1279;

    const booksNumber = result.data.booksNumber;
    const planningDuration = result.data.planningDur;
    const booksLeft = result.planning.booksToRead.length;
    const planing = result.planning;
    const books = result.data.books;
    const { endDate, startDate, results, totalPages } = planing;
    const averagePages = Math.ceil(totalPages / planningDuration);
    const graphData = fillGraphData(
        results,
        startDate,
        totalPages,
        planningDuration
    );

    return (
        <AnimationPage>
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
                        <Graph averagePages={averagePages} data={graphData} />
                    </GraphWrapper>
                    <Results
                        results={results}
                        endDate={endDate}
                        minDate={startDate}
                    />
                </BottomWrapper>
            </Section>
        </AnimationPage>
    );
};

export default Statistics;
