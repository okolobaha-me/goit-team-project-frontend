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
    Title,
    TopWrapper,
    InnerWrapper,
    BottomWrapper,
} from './Statistics.styled';

const Statistics = () => {
    const isTablet = window.screen.width > 767 && window.screen.width <= 1279;
    return (
        <Container>
            <Section>
                <TopWrapper>
                    <GoalsWrapper>
                        <Goals />
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
                    <GraphWrapper>
                        <h1>Graphic</h1>
                    </GraphWrapper>
                    <Results />
                </BottomWrapper>
            </Section>
        </Container>
    );
};

export default Statistics;
