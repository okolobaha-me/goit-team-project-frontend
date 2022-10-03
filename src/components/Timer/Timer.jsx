import TimerLogic from './TimerLogic';
import { TimerContainer } from './Timer.styled';

const Timer = () => {
    return (
        <>
            <TimerContainer>
                <TimerLogic />
                <TimerLogic expectDate={'13 May 2023'} />
            </TimerContainer>
        </>
    );
};

export default Timer;
