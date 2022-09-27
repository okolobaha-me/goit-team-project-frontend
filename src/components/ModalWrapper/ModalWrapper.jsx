import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, ModalContainer, ModalContent } from './ModalWrapper.styled';

export const ModalWrapper = ({ closeModal, children }) => {
    const modalRoot = document.querySelector('#modal-root');

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        const root = document.getElementById('root');
        const bodyStyle = document.body.style;
        root.style.pointerEvents = 'none';
        bodyStyle.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            root.style.pointerEvents = 'auto';
            bodyStyle.overflow = 'visible';
        };
    });

    const handleKeyDown = event => {
        if (event.code === 'Escape') {
            closeModal();
        }
    };

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            closeModal();
        }
    };

    return createPortal(
        <Backdrop onClick={handleBackdropClick}>
            <ModalContainer variant={'input'}>
                <ModalContent>{children}</ModalContent>
            </ModalContainer>
        </Backdrop>,
        modalRoot
    );
};
