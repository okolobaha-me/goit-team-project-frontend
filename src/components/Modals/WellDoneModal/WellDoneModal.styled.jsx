import styled from '@emotion/styled';
import { colors } from '../../../baseStyles';
import { mq } from '../../../baseStyles';
import { btn } from '../../../baseStyles';

export const Icon = styled.svg`
    fill: ${colors.lightGrayText};
    margin-bottom: 12px;
`;

export const OrangeIcon = styled.svg`
    fill: ${colors.accentText};
    margin-bottom: 12px;
`;

export const Text = styled.p`
    margin-bottom: 20px;

    font-weight: 500;
    font-size: 16px;
    line-height: 1.38;

    text-align: center;

    color: ${colors.mainText};
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: max-content;

    margin: 0 auto;

    ${mq.tablet} {
        flex-direction: row;
    }
`;

export const Button = styled.button`
    ${btn};
    min-width: 157px;
    padding: 12px;
`;
