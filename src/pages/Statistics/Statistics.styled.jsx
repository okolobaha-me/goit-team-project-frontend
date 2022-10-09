import styled from '@emotion/styled';
import {colors, mq} from '../../baseStyles';

export const Section = styled.section`
    padding-top: 20px;
    padding-bottom: 32px;
`;

export const TopWrapper = styled.div`
    ${mq.desktop} {
        display: flex;
        flex-direction: row-reverse;
        gap: 32px;
        margin-bottom: 40px;
    }
`;

export const GoalsWrapper = styled.div`
    margin-bottom: 20px;

    ${mq.tablet} {
        margin-bottom: 40px;
    }

    ${mq.desktop} {
        margin-top: auto;
        margin-bottom: 0;
    }
`;

export const InnerWrapper = styled.div`
    ${mq.desktop} {
        display: flex;
        flex-direction: column;
    }
`;

export const TimerWrapper = styled.div`
    margin-bottom: 40px;
    ${mq.desktop} {
        margin-bottom: 0;
        padding-top: 8px;
    }
`;

export const FormWrapper = styled.div`
    margin-bottom: 40px;
`;

export const ListWrapper = styled.div`
    margin-bottom: 32px;

    border-bottom: 1px solid ${colors.sectionBorder};
    border-top: 1px solid ${colors.sectionBorder};

    ${mq.desktop} {
        width: 928px;
        margin-bottom: 0;
    }
`;

export const GraphWrapper = styled.div`
    margin-bottom: 32px;

    ${mq.tablet} {
        margin-bottom: 40px;
    }

    ${mq.desktop} {
        margin-bottom: 0;
    }
`;

export const Title = styled.h1`
    background-color: ${colors.greyBg};
    color: ${colors.whiteText};
    text-align: center;
    font-size: 20px;
    padding: 16px 52px;
    margin-top: 0;
    margin-bottom: 20px;

    ${mq.tablet} {
        margin-bottom: 28px;
    }
`;

export const BottomWrapper = styled.div`
    ${mq.desktop} {
        display: flex;
        gap: 32px;
    }
`;
