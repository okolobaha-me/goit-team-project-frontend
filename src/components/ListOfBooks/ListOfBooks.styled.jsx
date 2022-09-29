import styled from '@emotion/styled';
// import { Checkbox } from '@mui/material';
// import { btn, input } from '../../baseStyles/commonStyles';
import { mq } from '../../baseStyles/utils/mediaQueries';

export const ListOfLabels = styled.ul`
    display: flex;

    border-top: 1px solid #e0e5eb;
    border-bottom: 1px solid #e0e5eb;
    width: 704px;
    padding: 0;

    margin: 0 auto;
`;

export const ItemLabel = styled.li`
    list-style: none;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #898f9f;
`;

export const ListOfBook = styled.ul`
    width: 280px;
    background-color: #f6f7fb;
    margin: 0 auto;
    padding: 0;

    ${mq.tablet} {
        overflow: auto;
        height: 228px;
        width: 704px;
    }

    ${mq.desktop} {
        height: 214px;
    }
`;

export const Item = styled.li`
    list-style: none;

    padding-top: 20px;
    padding-bottom: 20px;

    border-bottom: 1px solid #e0e5eb;

    &:first-child {
        border-top: 1px solid #e0e5eb;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const Title = styled.p`
    margin: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    /* deep blue */

    color: #242a37;

    margin-bottom: 12px;
`;

export const ListOfDesc = styled.ul`
    list-style: none;
    padding: 0;
    padding-left: 34px;
`;

export const DescItem = styled.li`
    display: flex;
    justify-content: flex-end;
    width: 246px;
`;

export const Label = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    color: #898f9f;

    flex-basis: 30%;
    align-self: flex-start;
`;

export const Desc = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    text-align: left;

    /* deep blue */

    color: #242a37;

    flex-basis: 70%;
    flex-grow: 1;
`;
