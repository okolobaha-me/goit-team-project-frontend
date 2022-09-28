import styled from '@emotion/styled';
import { colors } from '../../baseStyles/utils/variables';
import { mq } from '../../baseStyles/utils/mediaQueries';
import { btn } from '../../baseStyles/commonStyles';

export const Icon = styled.svg`
    fill: ${colors.accentText};
    margin-bottom: 12px;
`;

export const Text = styled.p`
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;
    color: ${colors.mainText};

    ${mq.tablet} {
        font-size: 16px;
    }
`;

export const Button = styled.button`
    ${btn};
    min-width: 130px;
    padding: 12px;

    margin: 0 auto;

    ${mq.tablet} {
        font-size: 14px;
    }
`;

// #a6abb9
