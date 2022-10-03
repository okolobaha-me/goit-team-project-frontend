import styled from '@emotion/styled';
import {colors, fonts, mq} from '../../baseStyles';

export const HeaderStyled = styled.header`
    background-color: ${colors.whiteBg};
    padding: 16px 0;
    box-shadow: 0 2px 3px rgba(9, 30, 63, 0.1);
`;

export const Logo = styled.p`
    width: max-content;
    margin: ${({ isLoggedIn }) => (isLoggedIn ? '0' : '0 auto')};
    font-family: ${fonts.abril};

    font-size: 20px;
    line-height: 1.35;

    color: ${colors.mainText};

    ${mq.tablet} {
        margin: 0;
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;

    ${mq.tablet} {
        position: relative;
    }
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

export const UserInfo = styled.div`
    ${mq.tablet} {
        display: flex;
        align-items: center;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
    }
`;

export const UserName = styled.p`
    display: none;

    ${mq.tablet} {
        display: block;
    }
`;

export const UserAvatar = styled.p`
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

    cursor: default;

    ${mq.tablet} {
        margin-right: 12px;
    }
`;

export const ExitButton = styled.button`
    color: ${colors.mainText};

    &::after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        background-color: ${colors.mainText};
        transition: width 0.3s;
    }

    &:hover::after {
        width: 100%;
        transition: width 250ms;
    }
`;
