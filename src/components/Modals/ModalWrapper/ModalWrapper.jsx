import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, ModalContainer, ModalContent } from './ModalWrapper.styled';

const ModalWrapper = ({ closeModal, children, variant }) => {
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
            <ModalContainer variant={variant}>
                <ModalContent>{children}</ModalContent>
            </ModalContainer>
        </Backdrop>,
        modalRoot
    );
};

export default ModalWrapper;
