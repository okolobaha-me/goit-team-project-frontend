import styled from '@emotion/styled';
import {btn, colors, mq} from '../../baseStyles';

export const Section = styled.section`
    padding: 20px 0 60px;
`;

export const GoalsWrapper = styled.div`
    margin-bottom: 20px;

    ${mq.tablet} {
        margin-bottom: 40px;
    }
`;

export const ListWrapper = styled.div`
    margin-bottom: 32px;

    border-bottom: 1px solid ${colors.sectionBorder};
    border-top: 1px solid ${colors.sectionBorder};

    ${mq.desktop} {
        width: 928px;
    }
`;

export const Button = styled.button`
    ${btn};
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;
`;

export const GraphWrapper = styled.div`
    width: 280px;
    height: 290px;
    background-color: white;
    box-shadow: 0 2px 3px rgba(9, 30, 63, 0.25);

    ${mq.tablet} {
        width: 704px;
        height: 340px;
    }

    ${mq.desktop} {
        width: 928px;
    }
`;

export const HeadWrapper = styled.div`
    ${mq.desktop} {
        display: flex;
        flex-direction: row-reverse;
        gap: 32px;
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

export const FormListWrapper = styled.div`
    ${mq.tablet} {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    ${mq.desktop} {
        gap: 24px;
    }
`;

export const FormWrapper = styled.div``;

export const BottomWrapper = styled.div`
    width: max-content;
`;
