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
import { Graph } from '../../components/Graph/Graph';
import AnimationPage from '../../components/Animations/AnimationPage';

const Statistics = () => {
    const isTablet = window.screen.width > 767 && window.screen.width <= 1279;
    return (
        <Container>
            <AnimationPage>
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
                        <Graph />
                        <Results />
                    </BottomWrapper>
                </Section>
            </AnimationPage>
        </Container>
    );
};

export default Statistics;
