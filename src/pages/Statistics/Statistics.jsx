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
    const isTablet = window.screen.width > 767 && window.screen.width <= 1279;
    return (
        <Container>
            <Section>
                <GoalsWrapper>
                    <Goals />
                </GoalsWrapper>
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
