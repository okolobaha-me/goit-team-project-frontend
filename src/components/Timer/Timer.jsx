import TimerLogic from './TimerLogic';
import {TimerContainer} from './Timer.styled';

const Timer = ({ endDate }) => {
    return (
        <>
            <TimerContainer>
                <TimerLogic />
                <TimerLogic expectDate={endDate} />
            </TimerContainer>
        </>
    );
};

export default Timer;
