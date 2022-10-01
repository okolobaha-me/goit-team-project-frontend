import styled from '@emotion/styled';
import { mq } from '../../baseStyles/utils/mediaQueries';
import { DescItem, ItemLabel, Title } from '../ListOfBooks/ListOfBooks.styled';

export const TrTitle = styled(Title)`
    margin-left: 12px;

    ${mq.tablet} {
        margin-left: 18px;
    }
`;

export const TrItemLabel = styled(ItemLabel)`
    ${mq.desktop} {
        &:nth-of-type(3) {
            width: 15%;
        }

        &:nth-of-type(4) {
            width: 15%;
        }
    }
`;

export const TrDescItem = styled(DescItem)`
    ${mq.desktop} {
        &:nth-of-type(2) {
            width: 25%;
        }

        &:nth-of-type(3) {
            width: 25%;
        }
    }
`;
