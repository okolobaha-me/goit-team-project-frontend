import { css } from '@emotion/react';
import { colors } from './utils/variables';
import { mq } from './utils/mediaQueries';
import styled from '@emotion/styled';

export const list = () => {
    return css`
        margin: 0;
        padding: 0;
        list-style: none;
    `;
};

const chooseBtnVariant = variant => {
    switch (variant) {
        case 'accent':
            return `background-color: ${colors.accentBg};
                    color: ${colors.whiteText};
                    font-weight: 600;
                    border: 1px solid transparent;;
                    
                    &:hover,
                    &:focus {
                    border: 1px solid ${colors.accentBg};
                    color: ${colors.accentText};
                    background-color: transparent;
                    }`;
        case 'gray':
            return `background-color: ${colors.darkBg};
                    color: ${colors.whiteText};
                    font-weight: 500;
                    border: 1px solid transparent;;
                    
                    &:hover,
                    &:focus {
                    border: 1px solid ${colors.darkBg};
                    color: ${colors.darkText};
                    background-color: transparent;
                    }`;
        case 'transparent':
        default:
            return `background-color: transparent;
                    color: ${colors.mainText};
                    font-weight: 500;
                    border: 1px solid ${colors.mainText};
                    
                    &:hover,
                    &:focus {
                    border: 1px solid transparent;
                    color: ${colors.whiteText};
                    background-color: ${colors.darkBg};
                    }`;
    }
};

export const btn = ({ variant }) => {
    return css`
        ${chooseBtnVariant(variant)};

        font-size: 14px;
        padding: 12px 28px;

        display: block;
        font-weight: 600;
        line-height: 1.2;
        text-align: center;
        outline: none;
        cursor: pointer;
        transition: 0.2s linear;

        ${mq.tablet} {
            font-size: 16px;
        }
    `;
};

export const input = () => {
    return css`
        font-size: 14px;
        line-height: 1.2;
        padding: 12px;
    `;
};

export const Input = styled.input`
    ${input};
`;
