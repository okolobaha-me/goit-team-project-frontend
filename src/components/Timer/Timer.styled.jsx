import styled from '@emotion/styled';
import { colors, fonts, mq } from '../../baseStyles';

export const TaimerMain = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
    width: 290px;
    height: 60px;
    background-color: ${colors.whiteBg};
    margin-top: 9px;
    padding: 0 38px;
    box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
`;

export const TimerTitle = styled.p`
    font-family: ${fonts.main};
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: ${colors.darkGrayText};
`;

export const TimerDays = styled.p`
    font-family: ${fonts.main};
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    color: ${colors.darkGrayText};
`;

export const TimerNumber = styled.p`
    font-family: ${fonts.openSans};
    font-weight: 700;
    font-size: 25px;
    line-height: 38px;
    color: ${colors.mainText};
`;

export const TimerList = styled.div`
    margin: 0 10px;
    &:last-child {
        margin-right: 0;
    }
    &:first-of-type {
        margin-left: 0;
    }
`;

export const TaimerAlign = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    &:last-child {
        margin-left: 74px;
    };

    ${mq.mobileOnly} {
        &:last-child {
            margin-left: 0px;
            margin-top: 24px;
        }
    }
`;

export const TimerContainer = styled.div`
    ${mq.tablet} {
        display: flex;
        align-items: baseline;
        justify-content: center;
    }
`;
