import styled from '@emotion/styled';
import { colors, fonts } from '../../baseStyles/utils/variables';

export const HeaderStyled = styled.header`
    padding: 16px;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
`;

export const Logo = styled.p`
    width: max-content;
    margin: ${({ isLoggedIn }) => (isLoggedIn ? '0' : '0 auto')};
    font-family: ${fonts.abril};

    font-size: 20px;
    line-height: 1.35;

    color: ${colors.mainText};
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
`;

export const NavItem = styled.li`
    margin-right: 13px;
`;

export const Icon = styled.svg``;
