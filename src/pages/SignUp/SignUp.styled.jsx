import styled from '@emotion/styled';
import { mq } from '../../baseStyles/utils/mediaQueries';

export const Box = styled.div`
    height: calc(100vh - 60px);

    ${mq.desktop} {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
