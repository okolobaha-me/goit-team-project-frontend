import styled from '@emotion/styled';
import { colors } from '../../baseStyles/utils/variables';
import { mq } from '../../baseStyles/utils/mediaQueries';
import { btn } from '../../baseStyles/commonStyles';

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
    justify-content: center;

    gap: 16px;
`;

export const Button = styled.button`
    ${btn};
    min-width: 100px;
    padding: 12px 20px;

    ${mq.tablet} {
        min-width: 132px;
    }
`;
