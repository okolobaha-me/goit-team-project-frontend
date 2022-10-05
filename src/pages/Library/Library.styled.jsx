import styled from '@emotion/styled';
import {mq} from '../../baseStyles';

export const Section = styled.section`
    padding: 40px 0;

    ${mq.mobileOnly} {
        padding-bottom: 100px;
    }
`;

export const EmptyWrapper = styled.div`
    margin-top: 40px;
`;
