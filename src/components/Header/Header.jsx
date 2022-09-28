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
                    <Logo isLoggedIn={isLoggedIn}>
                        <p>BR</p>
                    </Logo>
                    <Nav>
                        <NavList>
                            <NavItem>
                                <Icon width="22" height="17">
                                    <use href={`${icons}#icon-book`} />
                                </Icon>
                            </NavItem>
                            <NavItem>
                                <Icon width="20" height="17">
                                    <use href={`${icons}#icon-home`} />
                                </Icon>
                            </NavItem>
                        </NavList>
                    </Nav>
                    {/* <button onClick={openExitModal}>exit</button> */}
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
