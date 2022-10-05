import { Container } from '../../baseStyles';
import Timer from '../../components/Timer';
import Goals from '../../components/Goals';
import { ListOfBooksTraining } from '../../components/ListOfBooksTraining';
import { Results } from '../../components/Results';
import { TrainingForm } from '../../components/TrainingForm';
import {
    Section,
    TimerWrapper,
    GoalsWrapper,
    FormWrapper,
    ListWrapper,
    GraphWrapper,
    ResultsWrapper,
    Title,
} from './Statistics.styled';

const Statistics = () => {
    let isMobile = window.matchMedia('(max-width: 767px)').matches;

    return (
        <Container>
            <Section>
                <TimerWrapper>
                    <Timer />
                </TimerWrapper>
                <GoalsWrapper>
                    <Goals />
                </GoalsWrapper>
                <FormWrapper>
                    {!isMobile && (
                        <>
                            <Title>Моє тренування</Title>
                            <TrainingForm />
                        </>
                    )}
                </FormWrapper>
                <ListWrapper>
                    <ListOfBooksTraining />
                </ListWrapper>
                <GraphWrapper>
                    <h1>Graphic</h1>
                </GraphWrapper>
                <ResultsWrapper>
                    <Results />
                </ResultsWrapper>
            </Section>
        </Container>
    );
};

export default Statistics;
