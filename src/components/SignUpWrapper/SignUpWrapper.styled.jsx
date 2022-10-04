import styled from '@emotion/styled';
import { mq } from '../../baseStyles/utils/mediaQueries';

export const Box = styled.div`
    ${mq.desktop} {
        display: flex;
        align-items: center;
    }
`;
