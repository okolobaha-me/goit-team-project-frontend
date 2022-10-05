import styled from '@emotion/styled';
import { btn } from '../../baseStyles/commonStyles';
import { Link as link } from 'react-router-dom';

export const BtnList = styled.ul`
    display: flex;
    justify-content: center;
`;

export const BtnItem = styled.li`
    &:not(:last-child) {
        margin-right: 20px;
    }
`;

export const EnterLink = styled(link)`
    ${btn};
    font-weight: 500;
    padding-left: 40px;
    padding-right: 40px;
`;

export const RegisterLink = styled(link)`
    ${btn};
    font-weight: 500;
    padding-left: 24px;
    padding-right: 24px;
`;
