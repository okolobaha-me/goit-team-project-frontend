import styled from '@emotion/styled';
import {colors, mq} from '../../baseStyles';

export const StatisticsHome = styled.div`
    width: 100%;
    padding: 24px 20px 20px;
    background-color: ${colors.whiteBg};
    box-shadow: 0 2px 3px rgba(9, 30, 63, 0.25);

    ${mq.tablet} {
        padding: 36px 48px 32px;
    }

    ${mq.desktop} {
        width: 928px;
    }
`;

export const TextStats = styled.p`
    margin: 0 0 20px 5px;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
`;

export const NumberDay = styled.span`
    display: inline-block;
    padding: 8px 5px;
    margin: -8px 10px;
    background-color: ${colors.lightBg};
`;
