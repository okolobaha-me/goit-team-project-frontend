import styled from '@emotion/styled';
import { list } from '../../baseStyles/commonStyles';
import { colors } from '../../baseStyles/utils/variables';

export const Wrapper = styled.div`
    background: ${colors.mainBg};
`;

export const Title = styled.h2`
    &:first-of-type {
        margin-top: 0px;
        padding-top: 0px;
    }
    font-size: 19px;
    font-weight: 600;
    line-height: 1.4;
    color: ${colors.mainText};
    padding-top: 20px;
    padding-bottom: 20px;
`;



export const List = styled.ul`
    ${list}
            position: relative;

`;

export const Icon = styled.svg`
 position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%);
`;

export const Button = styled.button`
    border: none;
   
`;
