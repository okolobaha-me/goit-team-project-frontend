import styled from '@emotion/styled';
import {DatePicker, InputNumber} from 'antd';
import {colors, mq} from '../../baseStyles';

export const Wrapper = styled.div`
    width: 280px;
    height: 340px;

    padding: 20px;

    font-size: 14px;
    line-height: 17px;

    background-color: ${colors.whiteText};
    box-shadow: 0 2px 3px rgba(9, 30, 63, 0.1);

    ${mq.tabletOnly} {
        width: 704px;
        height: 309px;

        padding: 27px 96px;
    }
`;

export const Form = styled.form`
    ${mq.tabletOnly} {
        display: flex;
        align-items: flex-end;
        margin-bottom: 20px;
    }
`;

export const WrapperOdLabels = styled.div`
    display: flex;
    margin-bottom: 28px;

    ${mq.tabletOnly} {
        width: 238px;
        margin-bottom: 0;
        margin-right: 32px;
    }
`;

export const Title = styled.h3`
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;

    text-align: center;
    text-transform: uppercase;

    margin-bottom: 12px;

    color: ${colors.mainText};

    &:nth-of-type(2) {
        font-weight: 700;
        margin-bottom: 4px;

        &::before,
        &::after {
            content: '';
            display: inline-block;
            width: 71px;
            height: 1px;
            background-color: ${colors.lightBg};
            vertical-align: middle;

            margin-right: 4px;
        }

        &::after {
            margin-left: 4px;
        }
    }

    ${mq.tabletOnly} {
        font-size: 14px;
        text-align: center;

        &:nth-of-type(2) {
            text-align: left;
            margin-bottom: 6px;

            &::before {
                display: none;
            }

            &::after {
                width: 128px;
                margin-left: 8px;
                margin-right: 0;
            }
        }
    }
`;

export const DatePickerCustom = styled(DatePicker)`
    color: ${colors.mainText};
    letter-spacing: -0.05em;

    width: 110px;
    height: 42px;

    background-color: ${colors.mainBg};
    border: 1px solid ${colors.mainBorder};

    margin-right: 20px;
    margin-top: 4px;

    & input {
        letter-spacing: -1.5px;
    }
`;

export const Icon = styled.svg`
    width: 13px;
    height: 7px;
`;

export const Input = styled(InputNumber)`
    display: flex;
    align-items: center;

    width: 110px;
    height: 42px;

    background-color: ${colors.mainBg};
    border: 1px solid ${colors.mainBorder};

    margin-top: 4px;

    & input {
        letter-spacing: -1.5px;
    }
`;

export const Label = styled.label`
    display: flex;
    flex-wrap: wrap;

    font-weight: 500;
    font-size: 11px;
    line-height: 13px;

    color: ${colors.darkGrayText};
`;

export const Button = styled.button`
    display: block;

    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    border: 1px solid ${colors.accentBg};

    text-align: center;

    color: ${colors.whiteText};
    background-color: ${colors.accentBg};

    width: 240px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 24px;

    &:hover,
    &:focus {
        color: ${colors.accentText};
        background-color: transparent;
    }

    ${mq.tabletOnly} {
        width: 240px;
        height: 42px;
        margin: 0;
    }
`;

export const DatesList = styled.ul`
    width: 240px;
`;

export const DatesItem = styled.li`
    display: flex;
    margin-bottom: 4px;
    letter-spacing: -1px;
`;

export const Date = styled.span`
    margin-right: 30px;

    text-align: center;
    text-transform: uppercase;

    color: ${colors.mainText};
`;

export const Time = styled.span`
    text-transform: uppercase;
    color: ${colors.darkGrayText};
`;

export const NumberOfPages = styled.span`
    text-align: right;
    flex-basis: 35%;

    color: ${colors.mainText};
`;

export const Pages = styled.span`
    text-align: right;
    color: ${colors.darkGrayText};
`;
