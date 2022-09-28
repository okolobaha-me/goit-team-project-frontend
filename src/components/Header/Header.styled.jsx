import styled from '@emotion/styled';
import { colors, fonts } from '../../baseStyles/utils/variables';

export const HeaderStyled = styled.header`
    padding: 16px 0;
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

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Nav = styled.nav`
    margin-left: auto;
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    padding-right: 7px;
    border-right: 1px solid #e0e5eb;
`;

export const NavItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 33px;
    height: 33px;

    border-radius: 50%;

    transition: background 150ms linear;

    &:hover {
        background-color: #f5f7fa;
    }
`;

export const NavButton = styled.button``;

export const Icon = styled.svg`
    display: flex;
`;

export const UserPanel = styled.div`
    display: flex;
    padding-left: 14px;
`;

export const UserAvatar = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 14px;

    font-weight: 600;
    font-size: 14px;
    line-height: 1.2;

    color: ${colors.mainText};

    width: 33px;
    height: 33px;
    border: 0;
    border-radius: 50%;
    background-color: #f5f7fa;
`;

export const ExitButton = styled.button`
    color: ${colors.mainText};
    border-bottom: 1px solid ${colors.mainText};
`;
