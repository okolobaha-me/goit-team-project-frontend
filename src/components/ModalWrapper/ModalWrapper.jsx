import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, ModalContainer, ModalContent } from './ModalWrapper.styled';

export const ModalWrapper = ({ closeModal }) => {
    const modalRoot = document.querySelector('#modal-root');

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
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
        <Backdrop>
            <ModalContainer>
                <ModalContent>
                    Якщо Ви вийдете з програми незбережені дані будуть втрачені
                </ModalContent>
            </ModalContainer>
        </Backdrop>,
        modalRoot
    );
};
