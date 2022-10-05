import styled from '@emotion/styled';
import {DatePicker, Select} from 'antd';
import {btn, colors, fonts, input, mq} from '../../baseStyles';

export const DatePickers = styled(DatePicker)`
    font-size: 14px;
    font-family: ${fonts.main};

    width: 280px;
    height: 42px;
    padding-left: 45px;
    color: ${colors.lightGrayText};

    ${mq.tablet} {
        width: 250px;
    }
`;

export const Selects = styled(Select)`
    /* ${input}; */
    font-size: 14px;
    font-family: ${fonts.main};

    width: 280px;
    height: 42px;
    color: ${colors.lightGrayText};

    margin-bottom: 32px;

    ${mq.tablet} {
        width: 483px;
        margin-bottom: 0;
        margin-right: 50px;
    }

    ${mq.desktop} {
        width: 715px;
        margin-right: 32px;
    }
`;

export const Form = styled.form`
    ${mq.tablet} {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const DatesWrapper = styled.div`
    ${mq.tablet} {
        display: flex;
        justify-content: start;
        width: 704px;
        margin-bottom: 24px;
    }

    ${mq.desktop} {
        width: 928px;
        padding-left: 171px;
    }
`;

export const Button = styled.button`
    ${btn};

    width: 181px;
    height: 40px;
    padding: 11px;

    font-weight: 500;

    ${mq.mobileOnly} {
        margin-left: auto;
        margin-right: auto;
    }

    ${mq.tablet} {
        font-size: 14px;
    }

    ${mq.tabletOnly} {
        width: 171px;
    }
`;

export const Icon = styled.svg`
    fill: ${colors.mainText};
`;

export const CalendarIcon = styled.svg`
    position: absolute;
    top: 12px;
    left: 12px;
`;

export const InputDateWrapper = styled.div`
    position: relative;
    width: 280px;
    margin-bottom: 20px;

    ${mq.tablet} {
        width: 250px;
        margin-bottom: 0;

        & + & {
            margin-left: 40px;
        }
    }

    ${mq.desktop} {
        & + & {
            margin-left: 44px;
        }
    }
`;
