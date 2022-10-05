import styled from '@emotion/styled';
import {btn, colors, fonts, input, mq} from '../../baseStyles';
import {TextField} from '@mui/material';

export const Wrapper = styled.div`
    background: ${colors.mainBg};
    padding-bottom: 40px;
`;

export const Icon = styled.svg`
    margin-left: 20px;
    margin-bottom: 32px;
    margin-top: 24px;
    ${mq.tablet} {
        display: none;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    ${mq.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
    }

    ${mq.tabletOnly} {
        max-width: 704px;
    }
`;

export const Button = styled.button`
    ${btn};

    margin-right: auto;
    margin-left: auto;
    padding-top: 12px;
    padding-bottom: 13px;
    padding-left: 58px;
    padding-right: 58px;
    ${mq.desktop} {
        margin: 0;
        margin-top: auto;
        padding-left: 63px;
        padding-right: 63px;
    }
`;

export const Input = styled.input`
    ${input};
    margin-top: 8px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    padding-bottom: 20px;
    color: ${colors.darkGrayText};

    ${mq.mobileOnly} {
        &:last-of-type {
            padding-bottom: 40px;
        }
    }

    ${mq.tabletOnly} {
        &:nth-of-type(2n) {
            width: 336px;
        }
        &:nth-of-type(3n) {
            width: 152px;
        }
        &:nth-of-type(4n) {
            width: 152px;
        }
        &:not(:last-of-type) {
            margin-right: 32px;
        }
        &:first-of-type {
            width: 704px;
            margin: 0;
        }
    }

    ${mq.desktop} {
        padding-bottom: 0;

        &:first-of-type {
            width: 346px;
        }
        &:nth-of-type(2n) {
            width: 250px;
        }
        &:nth-of-type(3n) {
            width: 134px;
        }
        &:nth-of-type(4n) {
            width: 134px;
        }
        &:not(:last-of-type) {
            margin-right: 16px;
        }
        &:last-of-type {
            margin-right: 48px;
        }
    }
`;

export const YearPicker = styled(TextField)`
    & .MuiFormLabel-root {
        position: relative;
        font-size: 14px;
        color: ${colors.darkGrayText};
    }

    & * {
        font-weight: 400 !important;
        font-family: ${fonts.main} !important;
    }

    & input {
        ${input};
        margin-left: -1px;
        z-index: 10;
    }

    & fieldset {
        border: none;
        height: 44px;
    }

    & .MuiInputBase-root {
        ${input};
        border: none;
        padding: 0 16px 0 0;
        border-radius: 0;
        height: 44px;

        &:hover {
            border: none;
        }
    }
`;

export const WrapYear = styled.div`
    margin-top: 8px;
    border: 1px solid ${colors.mainBorder};
`;
