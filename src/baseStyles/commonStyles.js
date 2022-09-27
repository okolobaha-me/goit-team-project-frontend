import {css} from '@emotion/react';
import {colors} from './utils/variables';
import {mq} from './utils/mediaQueries';

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
            return css`
                background-color: ${colors.accentBg};
                color: ${colors.whiteText};
                font-weight: 600;
                border: 1px solid transparent;

                &:hover,
                &:focus {
                    border: 1px solid ${colors.accentBg};
                    color: ${colors.accentText};
                    background-color: transparent;
                }
            `;
        case 'gray':
            return css`
                background-color: ${colors.darkBg};
                color: ${colors.whiteText};
                font-weight: 500;
                border: 1px solid transparent;

                &:hover,
                &:focus {
                    border: 1px solid ${colors.darkBg};
                    color: ${colors.darkText};
                    background-color: transparent;
                }
            `;
        case 'transparent':
        default:
            return css`
                background-color: transparent;
                color: ${colors.mainText};
                font-weight: 500;
                border: 1px solid ${colors.mainText};

                &:hover,
                &:focus {
                    border: 1px solid transparent;
                    color: ${colors.whiteText};
                    background-color: ${colors.darkBg};
                }
            `;
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

const chooseInputVariant = variant => {
    switch (variant) {
        case 'shadow':
            return css`
                border: none;
                background-color: ${colors.inputBg};
                box-shadow: inset 0 1px 2px rgb(0 0 0 / 0.3);

                &:focus {
                    background-color: ${colors.whiteBg};
                }
            `;

        case 'border':
        default:
            return css`
                border: 1px solid ${colors.mainBorder};
                background-color: ${colors.mainBg};

                &:focus {
                    background-color: ${colors.whiteBg};
                    box-shadow: inset 0 1px 2px rgb(0 0 0 / 0.3);
                    border: 1px solid transparent;
                }
            `;
    }
};

export const input = ({ variant }) => {
    return css`
        ${chooseInputVariant(variant)};

        outline: none;
        color: ${colors.mainText};
        font-size: 14px;
        line-height: 1.2;
        padding: 12px;
        transition: 0.2s linear;

        &::placeholder {
            color: ${colors.lightGrayText};
        }
    `;
};
