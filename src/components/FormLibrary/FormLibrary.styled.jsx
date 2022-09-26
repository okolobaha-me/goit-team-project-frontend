import styled from '@emotion/styled';
import { btn, input } from '../../baseStyles/commonStyles';
import { mq } from '../../baseStyles/utils/mediaQueries';

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
    margin-right: 20px;
    margin-left: 20px;

    ${mq.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
    }

    ${mq.tabletOnly} {
        margin-right: 32px;
        margin-left: 32px;
        max-width: 704px;
    }
`;

export const Button = styled.button`
    ${btn};
    width: 171px;
    margin-right: auto;
    margin-left: auto;
    ${mq.desktop} {
        margin: 0;
        width: 181px;
        margin-top: auto;
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
