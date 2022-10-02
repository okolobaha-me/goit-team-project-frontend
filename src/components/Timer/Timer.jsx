import { Container } from '../../baseStyles/commonStyles';
import {
    TimerTitle,
    TaimerMain,
    TimerNumber,
    TimerDays,
    TimerList,
    TaimerAlign,
    TimerContainer,
} from './Timer.styled';
const Timer = () => {
    const defaultValueOnTimer = {
        days: '10',
        houers: '00',
        minutes: '00',
        seconds: '00',
    };

    return (
        <>
            <Container>
                <TaimerAlign>
                    <TimerContainer>
                        <TimerTitle>До закінчення року залишилось</TimerTitle>
                        <TaimerMain>
                            <TimerList>
                                <TimerNumber>
                                    {defaultValueOnTimer.days}
                                </TimerNumber>
                                <TimerDays>ДН</TimerDays>
                            </TimerList>
                            <TimerNumber>:</TimerNumber>
                            <TimerList>
                                <TimerNumber>
                                    {defaultValueOnTimer.houers}
                                </TimerNumber>
                                <TimerDays>ГОД</TimerDays>
                            </TimerList>

                            <TimerNumber>:</TimerNumber>

                            <TimerList>
                                <TimerNumber>
                                    {defaultValueOnTimer.minutes}
                                </TimerNumber>
                                <TimerDays>ХВ</TimerDays>
                            </TimerList>
                            <TimerNumber>:</TimerNumber>

                            <TimerList>
                                <TimerNumber>
                                    {defaultValueOnTimer.seconds}
                                </TimerNumber>
                                <TimerDays>СЕК</TimerDays>
                            </TimerList>
                        </TaimerMain>
                    </TimerContainer>
                    <TimerContainer>
                        <TimerTitle>До досягнення мети залишилось</TimerTitle>
                        <TaimerMain>
                            <TimerList>
                                <TimerNumber>
                                    {defaultValueOnTimer.days}
                                </TimerNumber>
                                <TimerDays>ДН</TimerDays>
                            </TimerList>
                            <TimerNumber>:</TimerNumber>
                            <TimerList>
                                <TimerNumber>
                                    {defaultValueOnTimer.houers}
                                </TimerNumber>
                                <TimerDays>ГОД</TimerDays>
                            </TimerList>

                            <TimerNumber>:</TimerNumber>

                            <TimerList>
                                <TimerNumber>
                                    {defaultValueOnTimer.minutes}
                                </TimerNumber>
                                <TimerDays>ХВ</TimerDays>
                            </TimerList>
                            <TimerNumber>:</TimerNumber>

                            <TimerList>
                                <TimerNumber>
                                    {defaultValueOnTimer.seconds}
                                </TimerNumber>
                                <TimerDays>СЕК</TimerDays>
                            </TimerList>
                        </TaimerMain>
                    </TimerContainer>
                </TaimerAlign>
            </Container>
        </>
    );
};

export default Timer;
