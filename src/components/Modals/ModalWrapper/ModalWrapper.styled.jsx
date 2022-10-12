import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '../../../baseStyles/utils/variables';
import { mq } from '../../../baseStyles/utils/mediaQueries';

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

                ${mq.mobile} {
                    width: 300px;
                }

                ${mq.mobileM} {
                    width: 350px;
                }
                ${mq.mobileL} {
                    width: 400px;
                }

                ${mq.tablet} {
                    width: 608px;
                }
            `;
        case 'info':
        default:
            return css`
                width: 280px;
                padding: 48px 24px;
                text-align: center;
                line-height: 1.38;

                ${mq.mobileM} {
                    width: 350px;
                }
                ${mq.mobileL} {
                    width: 400px;
                }

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

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & button {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

        ${mq.tablet} {
            font-size: 14px;
        }
    }
`;

export const ModalContent = styled.div`
    font-weight: 500;
    font-size: 16px;
    margin: 0 auto;
`;
