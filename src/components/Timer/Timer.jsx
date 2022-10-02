import TimerLogic from './TimerLogic';
import { TimerContainer } from './Timer.styled';

const Timer = () => {
    return (
        <>
            <TimerContainer>
                <TimerLogic expectDate={'13 May 2023'} />
                <TimerLogic />
            </TimerContainer>
        </>
    );
};

export default Timer;
