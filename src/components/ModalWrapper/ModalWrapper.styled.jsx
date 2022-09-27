import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '../../baseStyles/utils/variables';

export const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #4343439d;
`;

const chooseModalVariant = variant => {
    switch (variant) {
        case 'imput':
            return css`
                padding: 20px 40px;
                line-height: 1.25;
            `;
        case 'info':
        default:
            return css`
                padding: 48px 24px;
                text-align: center;
                line-height: 1.38;
            `;
    }
};

export const ModalContainer = styled.div`
    background-color: ${colors.whiteBg};
    box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
    width: 280px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const ModalContent = styled.div`
    font-weight: 500;
    font-size: 16px;
`;
