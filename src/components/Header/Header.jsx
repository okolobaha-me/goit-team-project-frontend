import { useState } from 'react';
import { Container } from '../../baseStyles';
import {
    ExitButton,
    HeaderStyled,
    HeaderWrapper,
    Icon,
    Link,
    Logo,
    Nav,
    NavItem,
    NavList,
    UserAvatar,
    UserInfo,
    UserName,
    UserPanel,
} from './Header.styled';
import icons from '../../images/svg/icons.svg';

import ExitModal from '../Modals/ExitModal/ExitModal';

import { getUserName, getIsLoggedIn } from '../../redux/auth/auth-selectors';

import { useSelector } from 'react-redux';

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isLoggedIn = useSelector(getIsLoggedIn);
    const userName = useSelector(getUserName);
    const userAvatar = userName[0]?.toUpperCase();

    const openExitModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <HeaderStyled>
                <Container>
                    <HeaderWrapper>
                        <Logo isLoggedIn={isLoggedIn}>BR</Logo>
                        {isLoggedIn && (
                            <>
                                <Nav>
                                    <NavList>
                                        <NavItem>
                                            <Link to={'library'}>
                                                <Icon width="22" height="17">
                                                    <use
                                                        href={`${icons}#icon-book-no-color`}
                                                    />
                                                </Icon>
                                            </Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link to={'training'}>
                                                <Icon width="20" height="17">
                                                    <use
                                                        href={`${icons}#icon-home`}
                                                    />
                                                </Icon>
                                            </Link>
                                        </NavItem>
                                    </NavList>
                                </Nav>
                                <UserPanel>
                                    <UserInfo>
                                        <UserAvatar>{userAvatar}</UserAvatar>
                                        <UserName>{userName}</UserName>
                                    </UserInfo>
                                    <ExitButton onClick={openExitModal}>
                                        Вихід
                                    </ExitButton>
                                </UserPanel>
                            </>
                        )}
                    </HeaderWrapper>
                </Container>
            </HeaderStyled>

            {isModalOpen && <ExitModal closeModal={closeModal} />}
        </>
    );
};
