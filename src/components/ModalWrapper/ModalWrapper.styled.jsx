import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {colors} from '../../baseStyles/utils/variables';
import {mq} from '../../baseStyles/utils/mediaQueries';
import {btn, input} from '../../baseStyles/commonStyles';
import {Rating} from '@mui/material';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #4343439d;
`;

const chooseModalVariant = variant => {
    switch (variant) {
        case 'input':
            return css`
                padding: 20px 20px 40px;
                line-height: 1.25;

                ${mq.tablet} {
                    width: 608px;
                }
            `;
        case 'info':
        default:
            return css`
                padding: 48px 24px;
                text-align: center;
                line-height: 1.38;

                ${mq.tablet} {
                    width: 394px;
                }
            `;
    }
};

export const ModalContainer = styled.div`
    ${({ variant }) => chooseModalVariant(variant)};

    background-color: ${colors.whiteBg};
    box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
    width: 280px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const ModalContent = styled.div`
    font-weight: 500;
    font-size: 16px;
    margin: 0 auto;
`;

//_________________________________________________________
//_________________________________________________________
//_________________________________________________________

export const Form = styled.form`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
`;

export const Title = styled.p`
    margin-bottom: 20px;

    ${mq.tablet} {
        margin-bottom: 12px;
    }
`;

export const StyledRating = styled(Rating)`
    margin-right: 10px;
`;

export const Label = styled.label`
    display: block;
    width: 100%;
`;

export const Input = styled.textarea`
    ${input};
    resize: none;
    display: inline-block;
    width: 100%;
    min-height: 170px;

    &:focus {
        box-shadow: none;
        border: 1px solid ${colors.mainBorder};
    }
`;

export const InputName = styled.p`
    margin-bottom: 8px;

    ${mq.tablet} {
        margin-bottom: 12px;
    }
`;

export const ErrWrapper = styled.div`
    color: ${colors.errorText};
    margin-bottom: 20px;
    font-size: 14px;

    ${mq.tablet} {
        display: flex;
        align-items: center;
    }
`;

export const Button = styled.button`
    ${btn};

    min-width: 96px;
    padding: 12px 14px;

    ${mq.tablet} {
        min-width: 130px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 20px;

    ${mq.tablet} {
        gap: 28px;
    }
`;
