import { useState } from 'react';
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';
import { Container } from '../../baseStyles/commonStyles';
import {
    HeaderStyled,
    Logo,
    Nav,
    Icon,
    NavList,
    NavItem,
    NavButton,
    ExitButton,
    HeaderWrapper,
    UserAvatar,
    UserPanel,
    UserName,
    UserInfo,
} from './Header.styled';
import icons from '../../images/svg/icons.svg';

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isLoggedIn = true;

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
                        <Logo isLoggedIn={isLoggedIn}>
                            <p>BR</p>
                        </Logo>
                        <Nav>
                            <NavList>
                                <NavItem>
                                    <NavButton>
                                        <Icon width="22" height="17">
                                            <use href={`${icons}#icon-book`} />
                                        </Icon>
                                    </NavButton>
                                </NavItem>
                                <NavItem>
                                    <NavButton>
                                        <Icon width="20" height="17">
                                            <use href={`${icons}#icon-home`} />
                                        </Icon>
                                    </NavButton>
                                </NavItem>
                            </NavList>
                        </Nav>
                        <UserPanel>
                            <UserInfo>
                                <UserAvatar>M</UserAvatar>
                                <UserName>Martha Stewart</UserName>
                            </UserInfo>
                            <ExitButton onClick={openExitModal}>
                                Вихід
                            </ExitButton>
                        </UserPanel>
                    </HeaderWrapper>
                </Container>
            </HeaderStyled>

            {isModalOpen && (
                <ModalWrapper variant={'info'} closeModal={closeModal}>
                    exit
                </ModalWrapper>
            )}
        </>
    );
};
