import styled from '@emotion/styled';
import { btn } from '../../../baseStyles/commonStyles';
import { mq } from '../../../baseStyles/utils/mediaQueries';
import { colors } from '../../../baseStyles/utils/variables';

export const Item = styled.li`
    display: flex;
    padding-top: 20px;
    padding-bottom: 32px;
    padding-left: 20px;
    padding-right: 26px;
    background: ${colors.whiteBg};
    box-shadow: 0px 2px 3px 0px #091e3f1a;
    margin-bottom: 20px;
    &:last-of-type {
        margin-bottom: 0px;
    }
`;

export const Icon = styled.svg`
    fill: ${({ color }) => color};
`;

export const Wrapper = styled.div`
    padding-left: 12px;
    width: 280px;
`;

export const Text = styled.p`
    font-size: 12px;
    color: ${colors.mainText};
    &:first-of-type {
        margin-top: 0px;
    }
`;
export const TextSelection = styled.span`
    color: ${colors.darkGrayText};
`;

export const Button = styled.button`
    ${btn};

    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    padding-top: 11px;
    padding-bottom: 12px;
    padding-left: 35px;
    padding-right: 33px;
    ${mq.desktop} {
        margin: 0;
        margin-top: auto;
        padding-left: 63px;
        padding-right: 63px;
    }
`;
