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
import ExitModal from '../ExitModal/ExitModal';
import icons from '../../images/svg/icons.svg';

import CongratulationsModal from '../CongratulationsModal/CongratulationsModal';
import WellDoneModal from '../WellDoneModal/WellDoneModal';

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isLoggedIn = true;
    const userName = 'Stepan';
    const userAvatar = userName[0].toUpperCase();

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
                                            <NavButton>
                                                <Icon width="22" height="17">
                                                    <use
                                                        href={`${icons}#icon-book`}
                                                    />
                                                </Icon>
                                            </NavButton>
                                        </NavItem>
                                        <NavItem>
                                            <NavButton>
                                                <Icon width="20" height="17">
                                                    <use
                                                        href={`${icons}#icon-home`}
                                                    />
                                                </Icon>
                                            </NavButton>
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

            {isModalOpen && (
                <ModalWrapper variant={'info'} closeModal={closeModal}>
                    {/* <ExitModal closeModal={closeModal} /> */}
                    {/* <CongratulationsModal closeModal={closeModal} /> */}
                    <WellDoneModal closeModal={closeModal} />
                </ModalWrapper>
            )}
        </>
    );
};
