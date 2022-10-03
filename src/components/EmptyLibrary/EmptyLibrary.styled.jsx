import styled from '@emotion/styled';
import {btn, colors, list, mq} from '../../baseStyles';

export const MobileContainer = styled.div`
    ${mq.mobileOnly} {
        margin: 0 20px;
    }
    ${mq.tablet} {
        display: none;
    }
`;

export const ArrowBackIcon = styled.svg`
    margin: 24px 0 32px 0;

    ${mq.tablet} {
        display: none;
    }
`;
export const BookName = styled.p`
    ${list};
    font-size: 14px;
    line-height: 1.21;
    color: ${colors.darkGrayText};
    margin-bottom: 8px;
    ${mq.tablet} {
        display: none;
    }
`;

export const Box = styled.div`
    max-width: 608px;
    margin: 0 auto;

    background-color: ${colors.whiteBg};
    box-shadow: 0 2px 3px rgba(9, 30, 63, 0.1);
    padding: 40px;

    ${mq.mobileOnly} {
        margin: 0 20px;
        padding: 40px 20px;
    }
`;

export const List = styled.ul`
    ${list};
`;

export const ListItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 24px;
        ${mq.mobileOnly} {
            margin-bottom: 20px;
        }
    }
`;

export const Title = styled.h2`
    ${list};
    margin-bottom: 16px;
    font-size: 19px;
    line-height: 1.21;

    ${mq.mobileOnly} {
        font-size: 18px;
        line-height: 1.22;
        margin-bottom: 8px;
    }
`;

export const StepText = styled.p`
    ${list};
    display: flex;
    margin-bottom: 8px;

    font-weight: 600;
    font-size: 16px;
    line-height: 1.25;
    color: ${colors.mainText};

    ${mq.mobileOnly} {
        font-size: 14px;
        line-height: 1.21;
    }
`;

export const StepTexIcon = styled.svg`
    margin-right: 12px;
`;

export const StepDescr = styled.p`
    ${list};
    margin-left: 34px;
    font-size: 14px;
    line-height: 1.21;
    color: ${colors.darkGrayText};
`;

export const StepDescrIcon = styled.svg`
    margin-right: 8px;
`;

export const Btn = styled.button`
    ${btn};
    padding: 12px 53px;
    margin: 40px auto 0;
    ${mq.tablet} {
        display: none;
    }
`;
