import styled from '@emotion/styled';
import { mq } from '../../baseStyles/utils/mediaQueries';
import { Container as componentbox } from '../../baseStyles/commonStyles';

export const Container = styled(componentbox)`
    height: calc(100vh - 65px);

    ${mq.mobile} {
        padding: 0;
    }
`;

export const Box = styled.div`
    height: calc(100vh - 65px);

    ${mq.desktop} {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
